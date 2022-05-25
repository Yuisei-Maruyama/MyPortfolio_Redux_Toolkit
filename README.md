# My Portfolio_Redux

## React + Redux + TypeScript

### 環境構築

```ts
npx create-next-app portfolio_redux --ts
```

### 開発環境について

- Node.js v16.15.0

### ディレクトリ構成

```ts
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx          全ページで必要な処理を書くファイル(ページ間の共通レイアウト・共通のstate・グローバルなCSS・各Routeコンポーネントのラップ・ReduxのProvider設定など)
│   ├── api
│   └── index.tsx         実際に画面表示するファイル
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── components        各コンポーネントを定義するファイル
│   ├── slice             各storeのモジュールを設定するファイル
│   └── store             storeの設定を記述するファイル
├── styles
│   ├── Home.module.css   特定のファイルに対するCSSモジュール
│   └── globals.css       全てのページに対応できるCSS
├── tools                 自動化スクリプトを定義するディレクトリ
│   ├── package.json      ESモジュールを解釈できるようにするために設置
│   ├── readme.ts         README.mdに書き込むためのスクリプトを定義するファイル
│   └── tsconfig.json
├── tsconfig.json
└── yarn.lock
```

### 使用パッケージ

### コンポーネント作成にあたって

VSCode の拡張機能 `Next.js snippets` を導入し、下記を実行する。

```ts
nafe;
```
