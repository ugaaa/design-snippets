# Production image
FROM node:20-alpine

# Set environment variable
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy build results
COPY ./.next ./.next
COPY ./public ./public
COPY ./node_modules ./node_modules
COPY ./package.json ./package.json

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
