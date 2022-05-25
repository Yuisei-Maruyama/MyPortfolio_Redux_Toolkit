import packageJson from '../package.json';
import { readFileSync, writeFile } from 'fs';

let readme = readFileSync('README.md', 'utf-8');
const { dependencies, devDependencies } = packageJson;

const targetHeadingIndex = readme.indexOf('### 使用パッケージ') + 11;
// INFO: 使用パッケージテーブルを追加するための場所を指定
const tableBodySetIndex = readme.indexOf('### コンポーネント作成にあたって');

console.log(tableBodySetIndex - targetHeadingIndex);

// 使用パッケージテーブルを更新
if (tableBodySetIndex - targetHeadingIndex > 2) {
  console.log('上書き');
}

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
      return 'react の説明です';
    case 'react-dom':
      return 'react-dom の説明です';
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
      return 'ts-node の説明です';
    case 'typescript':
      return 'typescript の説明です';
    default:
      break;
  }
  return '';
};

Object.entries(dependencies).map(([key, value]) => {
  name.push(key);
  version.push(value);
});

Object.entries(devDependencies).map(([key, value]) => {
  name.push(key);
  version.push(value);
});

let tableBodyBase = '| 技術 | version | 備考 |\n| ---- | ------- | ---- |\n';

for (let i = 0; i < name.length; i++) {
  tableBodyBase = tableBodyBase.concat(
    `| ${name[i]} | ${version[i]} | ${getDesc(name[i])} |\n`
  );
}

const convertReadme =
  readme.slice(0, tableBodySetIndex) +
  `${tableBodyBase}\n` +
  readme.slice(tableBodySetIndex);

writeFile('README.md', convertReadme, (err) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});
