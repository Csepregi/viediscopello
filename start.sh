#!/bin/sh -ex

# Create data directory if it doesn't exist
mkdir -p /data

# allocate swap space
fallocate -l 512M /swapfile
chmod 0600 /swapfile
mkswap /swapfile
echo 10 > /proc/sys/vm/swappiness
swapon /swapfile
echo 1 > /proc/sys/vm/overcommit_memory

# Ensure database migrations are run
npx prisma migrate deploy

# Start the application
npm run start
