FROM node:20.18.3 AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3050

RUN npm run build

#CMD ["npm", "run", "dev"]

# Stage 2: Serve Next.js using Nginx
FROM nginx:latest

COPY --from=builder /app/.next /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
