# Caffeine CLI — Debian

Debian slim variant of the Caffeine CLI Docker image.

**Base image:** `node:24-slim`

## Building

```bash
docker build -t caffeine/cli:debian ./images/debian

# with specific Caffeine CLI version
docker build \
  --build-arg BRUNO_VERSION=3.3.0 \
  -t caffeine/cli:3.3.0-debian \
  ./images/debian
```

## Usage

```bash
# Run a collection
docker run -v $(pwd):/caffeine caffeine/cli:debian run

# with pinned version
docker run -v $(pwd):/caffeine caffeine/cli:3.3.0-debian run
```
