FROM node:20-alpine
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npx prisma generate
CMD [ "node", "dist/main" ]
