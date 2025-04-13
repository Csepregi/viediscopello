#!/bin/bash

set -e

echo "NODE_ENV: $NODE_ENV"
echo "PORT: $PORT"
echo "HOST: $HOST"
echo "Running database migrations..."
npx prisma migrate deploy
npx prisma generate
echo "Migrations and client generation complete."

echo "Starting application..."
exec node ./build/server/index.js
