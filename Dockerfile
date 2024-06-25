# Next.js用のDockerfile（Node.js 21ベース）

# 1. Base imageの設定
FROM node:20-alpine

# 2. 作業ディレクトリの設定
WORKDIR /app

# 3. パッケージのインストール
COPY next/package.json next/package-lock.json ./
RUN npm install

# 4. アプリケーションのソースコードをコピー
COPY next .

# 5. アプリケーションのビルド
RUN npm run build

# 6. Production readyなイメージの作成
FROM node:21-alpine

# 7. 環境変数の設定
ENV NODE_ENV=production

# 8. 作業ディレクトリの設定
WORKDIR /app

# 9. ビルドされたアプリケーションのコピー
COPY --from=0 /app/public ./public
COPY --from=0 /app/.next ./.next
COPY --from=0 /app/node_modules ./node_modules
COPY --from=0 /app/package.json ./package.json

# 10. ポートのエクスポート
EXPOSE 3000

# 11. アプリケーションの起動
CMD ["npm", "start"]
