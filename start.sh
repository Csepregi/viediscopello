#!/bin/bash
set -e

echo "NODE_ENV: $NODE_ENV"
echo "PORT: $PORT"

echo "Running migrations..."
npx prisma migrate deploy
npx prisma generate 

echo "Starting app..."
exec node ./build/server/index.js
