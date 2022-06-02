import packageJson from '../package.json'
import { readFileSync, writeFile } from 'fs'

const { dependencies, devDependencies } = packageJson
const readme = readFileSync('README.md', 'utf-8')

const name: string[] = []
const version: string[] = []

const getDesc = (packageName: string) => {
  switch (packageName) {
    case '@reduxjs/toolkit':
      return '@reduxjs/toolkit の説明です'
    case 'next':
      return 'next の説明です'
    case 'normalizr':
      return 'normalizr の説明です'
    case 'react':
      return 'ユーザインタフェース構築のための JavaScript ライブラリ'
    case 'react-dom':
      return 'ルーティングを定義するためのライブラリ'
    case 'react-redux':
      return 'react-redux の説明です'
    case 'redux-persist':
      return 'Storeの状態を永続化するパッケージ'
    case '@types/node':
      return '@types/node の説明です'
    case '@types/react':
      return '@types/react の説明です'
    case '@types/react-dom':
      return '@types/react-dom の説明です'
    case '@types/react-redux':
      return '@types/react-redux の説明です'
    case 'eslint':
      return 'eslint の説明です'
    case 'eslint-config-next':
      return 'eslint-config-next の説明です'
    case 'ts-node':
      return 'typescript のファイルを単体で実行できるモジュール'
    case 'typescript':
      return 'JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語ライブラリ'
    case 'axios':
      return 'Promise ベースの HTTP Client ライブラリ'
    case '@emotion/react':
      return '@emotion/reactの説明です'
    default:
      break
  }
  return ''
}

Object.entries(dependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

Object.entries(devDependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

let tableBody = '| 技術 | version | 備考 |\n| ---- | ------- | ---- |\n'

for (let i = 0; i < name.length; i++) {
  tableBody = tableBody.concat(
    `| [${name[i]}](https://www.npmjs.com/package/${name[i]}) | ${version[i]} | ${getDesc(name[i])} |\n`
  )
}

writeFile(
  'README.md',
  readme.replace(
    readme.match(/### 使用パッケージ\n\n([\s\S]*)\n### コンポーネント作成にあたって/)?.[1] || '',
    tableBody
  ),
  (err) => {
    if (err) throw err
    console.log('正常に書き込みが完了しました')
  }
)
