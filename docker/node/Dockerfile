# ベースイメージとして Node.js 22 を使用
FROM node:22

# 作業ディレクトリを設定
WORKDIR /var/www/html

# 必要なツールをインストール（オプション）
RUN apt-get update && apt-get install -y \
    git \
    && apt-get clean

# コンテナが起動したらプロジェクトの依存関係をインストールする
CMD ["sh", "-c", "npm install && npm run dev"]
#CMD ["sh"]
#CMD ["tail", "-f", "/dev/null"]



