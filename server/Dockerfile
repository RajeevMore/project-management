FROM node:20.18.3

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY . .

EXPOSE 5050

CMD ["sh", "-c", "npx prisma migrate dev && npm run seed && npm run build && npm run start"]
