import packageJson from '../package.json';
import { existsSync, writeFile, unlinkSync } from 'fs';

/* eslint  no-multi-str: 0 */

const { dependencies, devDependencies } = packageJson;

const readme = ''

// INFO: README.mdが存在すれば、削除する
if (existsSync('README.md')) {
  unlinkSync('README.md')
}

const title = '# My Portfolio_Redux \n\n \
## React + Redux + TypeScript \n\n \
'

const env = '### 環境構築 \n\n \
```ts \n \
npx create-next-app portfolio_redux --ts \n \
``` \n\n \
'

const devEnv = ' ### 開発環境について \n\n \
- Node.js v16.15.0 \n \
- MacOS Monterey v12.4 \n\n \
'

const structure = '### ディレクトリ構成 \n\n \
```ts \n \
. \n \
├── README.md \n \
├── next-env.d.ts \n \
├── next.config.js \n \
├── node_modules \n \
├── package-lock.json \n \
├── package.json \n \
├── pages \n \
│   ├── _app.tsx          全ページで必要な処理を書くファイル(ページ間の共通レイアウト・共通のstate・グローバルなCSS・各Routeコンポーネントのラップ・ReduxのProvider設定など) \n \
│   ├── api \n \
│   └── index.tsx         実際に画面表示するファイル \n \
├── public \n \
│   ├── favicon.ico \n \
│   └── vercel.svg \n \
├── src \n \
│   ├── components        各コンポーネントを定義するファイル \n \
│   ├── slice             各storeのモジュールを設定するファイル \n \
│   └── store             storeの設定を記述するファイル \n \
├── styles \n \
│   ├── Home.module.css   特定のファイルに対するCSSモジュール \n \
│   └── globals.css       全てのページに対応できるCSS \n \
├── tools                 自動化スクリプトを定義するディレクトリ \n \
│   ├── package.json      ESモジュールを解釈できるようにするために設置 \n \
│   ├── readme.ts         README.mdに書き込むためのスクリプトを定義するファイル \n \
│   └── tsconfig.json \n \
├── tsconfig.json \n \
└── yarn.lock \n \
``` \n\n \
'

const name: string[] = [];
const version: string[] = [];

const getDesc = (packageName: string) => {
  switch (packageName) {
    case '@reduxjs/toolkit':
      return '@reduxjs/toolkit の説明です';
    case 'next':
      return 'next の説明です';
    case 'normalizr':
      return 'normalizr の説明です';
    case 'react':
      return 'ユーザインタフェース構築のための JavaScript ライブラリ';
    case 'react-dom':
      return 'ルーティングを定義するためのライブラリ';
    case 'react-redux':
      return 'react-redux の説明です';
    case 'redux-persist':
      return 'Storeの状態を永続化するパッケージ';
    case '@types/node':
      return '@types/node の説明です';
    case '@types/react':
      return '@types/react の説明です';
    case '@types/react-dom':
      return '@types/react-dom の説明です';
    case '@types/react-redux':
      return '@types/react-redux の説明です';
    case 'eslint':
      return 'eslint の説明です';
    case 'eslint-config-next':
      return 'eslint-config-next の説明です';
    case 'ts-node':
      return 'typescript のファイルを単体で実行できるモジュール';
    case 'typescript':
      return 'JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語ライブラリ';
    case 'axios':
      return 'Promise ベースの HTTP Client ライブラリ'
    default:
      break;
  }
  return '';
};

Object.entries(dependencies).forEach(([key, value]) => {
  name.push(key);
  version.push(value);
});

Object.entries(devDependencies).forEach(([key, value]) => {
  name.push(key);
  version.push(value);
});

let tableBody = '| 技術 | version | 備考 |\n| ---- | ------- | ---- |\n';

for (let i = 0; i < name.length; i++) {
  tableBody = tableBody.concat(
    `| [${name[i]}](https://www.npmjs.com/package/${name[i]}) | ${version[i]} | ${getDesc(name[i])} |\n`
  );
}

const packageList = `### 使用パッケージ \n\n${tableBody}\n`

const createComKnowledge = '### コンポーネント作成にあたって \n\n \
VSCode の拡張機能 `Next.js snippets` を導入し、下記を実行する。\n\n \
```ts \n \
nafe; \n \
``` \n \
'

const convertReadme = readme.concat(title, env, devEnv, structure, packageList, createComKnowledge )


writeFile('README.md', convertReadme, (err) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});
