# Base image for building
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY next/package.json next/package-lock.json ./
RUN npm install

# Copy source code and build
COPY next .
RUN npm run build

# Production image
FROM node:20-alpine

# Set environment variable
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
