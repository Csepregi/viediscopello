#!/bin/bash

# Print environment information
echo "NODE_ENV: $NODE_ENV"
echo "DATABASE_URL: ***masked***"
echo "PORT: $PORT"
echo "HOST: $HOST"

# Run prisma migrations with verbose logging
echo "Running database migrations..."
if ! npx prisma migrate deploy; then
    echo "Migration failed!"
    exit 1
fi
echo "Migrations completed"

# Wait for a moment to ensure database is ready
sleep 2

# Start the application using environment variables
echo "Starting application..."
exec node ./build/server/index.js
