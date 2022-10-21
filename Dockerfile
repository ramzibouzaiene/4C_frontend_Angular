FROM node:16.18.0 as build

WORKDIR /app

COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run prod

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/4c_frontend/ /usr/share/nginx/html
