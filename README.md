#docker を使って next を build＆起動
docker-compose up --build -d

#docker 止める時
docker-compose down

ローカルで起動したら以下 URL で接続
http://localhost:3000

docker 使わずにローカルで開発する場合
/next ディレクトリ配下で実行
npm run dev

デプロイテスト
