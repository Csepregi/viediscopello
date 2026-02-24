# Base node image.
FROM node:22-bullseye-slim as base

# Set global environment variables.
ENV PORT="8080"
ENV NODE_ENV="production"
ENV DATABASE_URL=file:/data/sqlite.db 

# Install sqlite client for runtime debugging and enable pinned pnpm via Corepack.
RUN apt-get update && apt-get install -y sqlite3
RUN corepack enable && corepack prepare pnpm@10.1.0 --activate

# Install all node_modules, including dev dependencies.
FROM base as deps

WORKDIR /myapp

ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile --prod=false
ADD prisma ./prisma
RUN pnpm exec prisma generate

# Setup production node_modules.
FROM base as production-deps

WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm prune --prod

# Build the app.
FROM base as build

WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD . .
RUN pnpm build

# Finally, build the production image with minimal footprint.
FROM base

# Add shortcut for connecting to database CLI.
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli 

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
COPY --from=build /myapp/package.json /myapp/package.json
COPY --from=build /myapp/start.sh /myapp/start.sh

ENTRYPOINT [ "./start.sh" ]
