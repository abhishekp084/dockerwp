# Use official Nginx image as base
FROM nginx:latest

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy website files (create an index.html first)
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx starts automatically in the base image, so no CMD needed
