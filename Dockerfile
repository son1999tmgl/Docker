FROM node:16-alpine3.16
RUN addgroup sonApp && adduser -S -G sonApp sonUser
USER sonUser
WORKDIR /app
COPY . .
RUN npm install
ENV API_PATH="http://localhost:4200/"
EXPOSE 4200
CMD [ "npm", "start" ]