#!/bin/sh -e

# This file is how Fly starts the server (configured in fly.toml).

exec ./node_modules/.bin/remix-serve ./build/index.js
