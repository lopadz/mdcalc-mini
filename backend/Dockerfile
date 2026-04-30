FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Source is bind-mounted in development; this COPY is for production builds
# where no volume is present.
COPY . .

EXPOSE 3001
CMD ["npm", "run", "dev"]
