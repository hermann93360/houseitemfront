FROM node:16.10.0-alpine3.11 as build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --environment=production

FROM nginx:1.17.1-alpine
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/houseitemfront /usr/share/nginx/html

