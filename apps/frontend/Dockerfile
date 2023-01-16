FROM node:19.3.0-alpine as base

RUN corepack enable

FROM base as build

RUN apk add --no-cache python3 make g++ git

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --unsafe-perm --frozen-lockfile

COPY tsconfig.base.json ./
COPY packages ./packages

RUN pnpm run build

FROM base as production-dependencies


WORKDIR /app

COPY --from=build /app/dist/frontend/package.json ./
COPY --from=build /app/.npmrc /app/pnpm-lock.yaml ./

RUN pnpm install --production --unsafe-perm --ignore-scripts

FROM node:19.3.0-alpine as application

ARG COMMAND

WORKDIR /app

COPY --from=build --chown=node /app/dist/frontend ./
COPY --from=production-dependencies --chown=node /app/node_modules ./node_modules

USER node

CMD node --enable-source-maps main.js