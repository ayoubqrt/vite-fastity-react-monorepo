FROM node:18.12.0-alpine as base

RUN corepack enable

FROM base as build

RUN apk add --no-cache python3 make g++ git

ARG PROJECT_NAME

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --unsafe-perm --frozen-lockfile

COPY tsconfig.base.json ./
COPY apps ./apps

RUN pnpm run --filter backend build

FROM base as production-dependencies

ARG PROJECT_NAME
ARG PROJECT_PATH

WORKDIR /app

COPY --from=build /app/dist/backend/package.json ./
COPY --from=build /app/.npmrc /app/pnpm-lock.yaml ./

RUN pnpm install --production --unsafe-perm --ignore-scripts

FROM node:18.12.0-alpine as application

ARG COMMAND

WORKDIR /app

COPY --from=build --chown=node /app/dist/backend/ ./
COPY --from=production-dependencies --chown=node /app/node_modules ./node_modules

USER node

CMD node --enable-source-maps main.cjs
