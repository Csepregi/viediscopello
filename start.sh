#!/bin/sh -e

# This file is how Fly starts the server (configured in fly.toml).

exec ./node_modules/.bin/react-router-serve ./build/server/index.js
