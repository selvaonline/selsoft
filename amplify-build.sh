#!/bin/bash

# Amplify build script for Next.js deployment
echo "Starting Amplify build process for Next.js..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Verify the .next directory exists
if [ -d ".next" ]; then
  echo "Build successful! .next directory created."
else
  echo "Build failed! .next directory not found."
  exit 1
fi

# Copy any additional assets if needed
echo "Copying additional assets..."
if [ -d "public" ]; then
  echo "Public directory exists, ensuring all assets are properly included."
fi

echo "Amplify build process completed successfully!"
