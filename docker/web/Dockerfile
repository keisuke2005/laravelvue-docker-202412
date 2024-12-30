FROM php:8.4-fpm

# 必要なツールとライブラリをインストール
RUN apt-get update && apt-get install -y \
    nginx \
    procps \
    curl \
    zip \
    unzip \
    git \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Nginxの設定ファイルをコピー
COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html

# NginxとPHP-FPMを同時に起動
CMD ["sh", "-c", "php-fpm & nginx -g 'daemon off;'"]

