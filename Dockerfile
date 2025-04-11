# Base node image
FROM node:18-bullseye-slim as base

# Set global environment variables
ENV PORT="3000"
ENV NODE_ENV="production"
ENV DATABASE_URL="file:/data/sqlite.db"
ENV HOST="0.0.0.0"

# Install openssl and other dependencies for Prisma
RUN apt-get update && apt-get install -y sqlite3 openssl

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
FROM base as deps

WORKDIR /myapp

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install dependencies and generate Prisma client
RUN pnpm install --frozen-lockfile
RUN npx prisma generate

# Build the app
FROM deps as build

# Copy application code
COPY . .
RUN pnpm run build

# Production image
FROM base

WORKDIR /myapp

# Add database CLI shortcut
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

# Copy built assets
COPY --from=build /myapp/build ./build
COPY --from=build /myapp/public ./public
COPY --from=build /myapp/package.json .
COPY --from=build /myapp/pnpm-lock.yaml .
COPY --from=build /myapp/prisma ./prisma
COPY --from=build /myapp/start.sh .

# Install production dependencies and generate Prisma client
RUN pnpm install --prod --frozen-lockfile
RUN npx prisma generate

# Ensure proper permissions
RUN chmod +x ./start.sh
RUN mkdir -p /data && chown -R node:node /data

# Expose the port
EXPOSE 3000

# Switch to non-root user
USER node

ENTRYPOINT [ "./start.sh" ]
