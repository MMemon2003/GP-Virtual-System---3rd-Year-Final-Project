FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev libzip-dev unzip git \
    && docker-php-ext-install pdo pdo_pgsql zip


# Enable Apache rewrite module
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy the Laravel app first
COPY . /var/www/html/

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Switch to www-data to avoid root issues
USER www-data

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Switch back to root for Apache
USER root

# Set Apache DocumentRoot to public
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|g' /etc/apache2/sites-available/000-default.conf
RUN echo "<Directory /var/www/html/public>\n    AllowOverride All\n</Directory>" >> /etc/apache2/apache2.conf

# Expose Render port
EXPOSE 10000

# Start Apache in foreground
CMD ["apache2-foreground"]
