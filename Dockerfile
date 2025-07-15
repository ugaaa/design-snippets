# Production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY next/package.json next/package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY next/ .

# Build the application
RUN npm run build

# Set environment variable
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
