# Design Snippets

## 開発環境での起動

```bash
npm install
npm run dev
```

ローカルで起動したら以下 URL で接続:
http://localhost:3000

## プロダクションビルド

```bash
npm run build
npm start
```

## 主な機能

- Next.js 14 + TypeScript
- Tailwind CSS (SCSS から移行済み)
- アスペクト比計算ツール
- レスポンシブデザイン

## デプロイ

main ブランチへのプッシュで自動デプロイされます。

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ディレクトリ構成

- src/:
  - components/: 再利用可能な React コンポーネントを格納します。
    - common/: アプリ全体で使用される共通コンポーネント。
    - snippets/: デザインスニペットに関連するコンポーネント。
  - styles/: CSS ファイルやモジュールを格納します。
    - globals.css: グローバルスタイルを定義。
    - snippets.module.css: 特定のコンポーネントに関連するスタイル。
  - utils/: ユーティリティ関数を格納します。
    - fetcher.ts: API リクエストを行うための汎用関数。
  - hooks/: カスタムフックを格納します。
    - useSnippets.ts: デザインスニペットを取得するためのカスタムフック。
  - types/: TypeScript の型定義を格納します。
    - snippet.ts: スニペットの型定義。
- app/: Next.js のルーティングを構成するページコンポーネント。
- public/: 画像などおくところ
