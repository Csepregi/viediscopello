#!/bin/sh

# Attempt to create swap (but don't fail if it doesn't work)
fallocate -l 512M /swapfile || true
chmod 0600 /swapfile || true
mkswap /swapfile || true
echo 10 > /proc/sys/vm/swappiness || true
swapon /swapfile || true
echo 1 > /proc/sys/vm/overcommit_memory || true

# Run prisma migrations
npx prisma migrate deploy

# Start the application with explicit host and port
HOST=0.0.0.0 PORT=3000 exec node ./build/server/index.js
