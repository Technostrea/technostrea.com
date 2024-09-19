# ETAPE 1: Construire l'application
FROM --platform=linux/arm64 node:20-alpine AS node-builder

ARG APP_NAME=technostrea
ARG ENVIRONMENT=production
ARG NG_VERSION=18

ENV APP_NAME=$APP_NAME
ENV ENVIRONMENT=$ENVIRONMENT
ENV NG_VERSION=$NG_VERSION

RUN npm cache clean --force
RUN npm install -g @angular/cli@$NG_VERSION

WORKDIR /app

COPY . .

RUN npm install
RUN ng build --configuration=$ENVIRONMENT --output-path=dist/


# ETAPE 2: Héberger l'application sur un serveur web nginx
FROM --platform=linux/arm64 nginx:1.26.0-alpine as server
EXPOSE 80
EXPOSE 443

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*
COPY --from=node-builder /app/dist/browser /usr/share/nginx/html
COPY --from=node-builder /app/nginx.conf /etc/nginx/conf.d/default.conf




