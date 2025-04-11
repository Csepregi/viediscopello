#!/bin/bash  # Change this line to use bash instead of sh

# Print environment information
echo "NODE_ENV: $NODE_ENV"
# Use a simpler way to mask the database URL
echo "DATABASE_URL: ***masked***"
echo "PORT: $PORT"
echo "HOST: $HOST"

# Run prisma migrations with verbose logging
echo "Running database migrations..."
npx prisma migrate deploy
echo "Migrations completed"

# Start the application with explicit host and port
echo "Starting application..."
HOST=0.0.0.0 PORT=3000 NODE_ENV=production exec node ./build/server/index.js
