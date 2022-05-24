import packageJson from '../package.json';
import { readFileSync } from 'fs';

const readme = readFileSync('README.md', 'utf-8');

// INFO: 使用パッケージテーブルを追加するための場所を指定
const tableBodySetIndex = readme.indexOf('### aaa');

const { dependencies, devDependencies } = packageJson;

const name: string[] = [];
const version: string[] = [];
const desc: string[] = [
  '@reduxjs/toolkit の説明です',
  'next の説明です',
  'normalizr の説明です',
  'react の説明です',
  'react-dom の説明です',
  'react-redux の説明です',
  'redux-persist の説明です',
  '@types/node の説明です',
  '@types/react の説明です',
  '@types/react-dom の説明です',
  '@types/react-redux の説明です',
  'eslint の説明です',
  'eslint-config-next の説明です',
  'ts-node の説明です',
  'typescript の説明です',
];

Object.entries(dependencies).map(([key, value]) => {
  name.push(key);
  version.push(value);
});

Object.entries(devDependencies).map(([key, value]) => {
  name.push(key);
  version.push(value);
});

let tableBodyBase = '| 技術 | version | 説明 |\n| ---- | ------- | ---- |\n';

for (let i = 0; i < name.length; i++) {
  tableBodyBase = tableBodyBase.concat(
    `| ${name[i]} | ${version[i]} | ${desc[i] ? desc[i] : ''} |\n`
  );
}

const convertReadme =
  readme.slice(0, tableBodySetIndex) +
  `${tableBodyBase}\n\n` +
  readme.slice(tableBodySetIndex);

console.log(convertReadme);
