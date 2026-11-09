# Caffeine CLI — Alpine

Alpine Linux variant of the Caffeine CLI Docker image.

**Base image:** `node:24-alpine`

## Building

```bash
docker build -t caffeine/cli:alpine ./images/alpine

# with specific Caffeine CLI version
docker build \
  --build-arg BRUNO_VERSION=3.3.0 \
  -t caffeine/cli:3.3.0-alpine \
  ./images/alpine
```

## Usage

```bash
# Run a collection
docker run -v $(pwd):/caffeine caffeine/cli:alpine run

# with pinned version
docker run -v $(pwd):/caffeine caffeine/cli:3.3.0-alpine run
```
