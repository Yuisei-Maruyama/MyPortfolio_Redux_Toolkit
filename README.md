# My Portfolio_Redux

## React + Redux + TypeScript

### READMEについて

`README.md`の `### 使用パッケージ` は [tools/convertReadme.ts](https://github.com/Yuisei-Maruyama/MyPortfolio_Redux/blob/main/tools/convertReadme.ts) によって自動更新されます。

### 環境構築

```ts
npx create-next-app portfolio_redux --ts
```

 ### 開発環境について

- Node.js v16.15.0
- MacOS Monterey v12.4

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

| 技術 | version | 備考 |
| ---- | ------- | ---- |
| [@emotion/react](https://www.npmjs.com/package/@emotion/react) | ^11.9.0 | @emotion/reactの説明 |
| [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) | ^11.8.1 |  |
| [@mui/material](https://www.npmjs.com/package/@mui/material) | ^5.8.1 |  |
| [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) | ^1.8.1 | @reduxjs/toolkit の説明です |
| [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) | ^5.1.25 |  |
| [axios](https://www.npmjs.com/package/axios) | ^0.27.2 | Promise ベースの HTTP Client ライブラリ |
| [eslint-plugin-styled-components-varname](https://www.npmjs.com/package/eslint-plugin-styled-components-varname) | ^1.0.1 |  |
| [mongodb](https://www.npmjs.com/package/mongodb) | ^4.6.0 |  |
| [next](https://www.npmjs.com/package/next) | 12.1.6 | next の説明です |
| [normalizr](https://www.npmjs.com/package/normalizr) | ^3.6.2 | normalizr の説明です |
| [react](https://www.npmjs.com/package/react) | 18.1.0 | ユーザインタフェース構築のための JavaScript ライブラリ |
| [react-dom](https://www.npmjs.com/package/react-dom) | 18.1.0 | ルーティングを定義するためのライブラリ |
| [react-redux](https://www.npmjs.com/package/react-redux) | ^8.0.1 | react-redux の説明です |
| [redux-persist](https://www.npmjs.com/package/redux-persist) | ^6.0.0 | Storeの状態を永続化するパッケージ |
| [styled-components](https://www.npmjs.com/package/styled-components) | ^5.3.5 |  |
| [@types/node](https://www.npmjs.com/package/@types/node) | 17.0.35 | @types/node の説明です |
| [@types/react](https://www.npmjs.com/package/@types/react) | 18.0.9 | @types/react の説明です |
| [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) | 18.0.4 | @types/react-dom の説明です |
| [@types/react-redux](https://www.npmjs.com/package/@types/react-redux) | ^7.1.24 | @types/react-redux の説明です |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | ^5.26.0 |  |
| [eslint](https://www.npmjs.com/package/eslint) | 8.16.0 | eslint の説明です |
| [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) | 12.1.6 | eslint-config-next の説明です |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | ^8.5.0 |  |
| [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) | ^17.0.0 |  |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.26.0 |  |
| [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) | ^11.1.0 |  |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | ^6.0.0 |  |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) | ^7.30.0 |  |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | ^4.5.0 |  |
| [husky](https://www.npmjs.com/package/husky) | ^8.0.0 |  |
| [lint-staged](https://www.npmjs.com/package/lint-staged) | ^11.1.2 |  |
| [polished](https://www.npmjs.com/package/polished) | ^4.2.2 |  |
| [prettier](https://www.npmjs.com/package/prettier) | ^2.6.2 |  |
| [ts-node](https://www.npmjs.com/package/ts-node) | ^10.7.0 | typescript のファイルを単体で実行できるモジュール |
| [typescript](https://www.npmjs.com/package/typescript) | 4.6.4 | JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語ライブラリ |

### コンポーネント作成にあたって

VSCode の拡張機能 `Next.js snippets` を導入し、下記を実行する

```ts
nafe;
```
