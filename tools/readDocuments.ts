import path from 'path'
import { readdirSync, readFileSync } from 'fs'

const documentsDir = path.join(process.cwd(), 'documents')
const documentNames = readdirSync(documentsDir)

export const getDocumentNames = () => {
  return documentNames
}


// INFO: getStaticPath で使用するパス名を取得する
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getAllDocumentNames = () => {
  return documentNames.map((fileName) => {
    return {
      params: {
        name: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

// INFO: 対象ドキュメントの内容を取得
export const getDocumentContent = (fileName: string) => {
  const fullPath = path.join(documentsDir, `${fileName}.md`)
  const documentContents = readFileSync(fullPath, 'utf-8')
  return documentContents
}
