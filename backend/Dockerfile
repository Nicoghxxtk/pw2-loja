# --- STAGE 1: Build ---
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- STAGE 2: Run ---
FROM node:18
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

CMD ["node", "dist/main.js"]
