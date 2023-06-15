FROM node:alpine

# Set working directory
WORKDIR /usr/src/project/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm ci

# Copy source code
COPY . .

CMD ["npm", "start"]