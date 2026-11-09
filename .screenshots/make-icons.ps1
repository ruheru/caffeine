param([string]$Logo, [string]$PngDir, [string]$IcoPath, [string[]]$Extra)
Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile($Logo)
$crop = 720
$rect = New-Object System.Drawing.Rectangle (1426 - $crop / 2), (616 - $crop / 2), $crop, $crop

function Render([int]$size) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.SmoothingMode = 'HighQuality'
  $g.PixelOffsetMode = 'HighQuality'
  $g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $size, $size), $rect, 'Pixel')
  $g.Dispose()
  $bmp
}

foreach ($s in 16, 24, 32, 48, 64, 128, 256, 512, 1024) {
  $b = Render $s
  $b.Save((Join-Path $PngDir "${s}x${s}.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $b.Dispose()
}

foreach ($p in $Extra) { Copy-Item (Join-Path $PngDir '256x256.png') $p -Force }

# ICO container with embedded PNG frames (supported since Windows Vista).
$frames = foreach ($s in 16, 24, 32, 48, 64, 128, 256) {
  $b = Render $s
  $ms = New-Object System.IO.MemoryStream
  $b.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $b.Dispose()
  [pscustomobject]@{ Size = $s; Bytes = $ms.ToArray() }
}
$fs = [System.IO.File]::Create($IcoPath)
$w = New-Object System.IO.BinaryWriter $fs
$w.Write([uint16]0); $w.Write([uint16]1); $w.Write([uint16]$frames.Count)
$offset = 6 + 16 * $frames.Count
foreach ($f in $frames) {
  $dim = if ($f.Size -ge 256) { 0 } else { $f.Size }
  $w.Write([byte]$dim); $w.Write([byte]$dim); $w.Write([byte]0); $w.Write([byte]0)
  $w.Write([uint16]1); $w.Write([uint16]32)
  $w.Write([uint32]$f.Bytes.Length); $w.Write([uint32]$offset)
  $offset += $f.Bytes.Length
}
foreach ($f in $frames) { $w.Write($f.Bytes) }
$w.Dispose(); $fs.Dispose(); $src.Dispose()
"icons written"
