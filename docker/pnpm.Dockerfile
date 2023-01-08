ARG IMAGE=node:18.12.1-alpine
FROM ${IMAGE}
EXPOSE 5173

RUN corepack enable