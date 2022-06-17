import React from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import Layout from '@/layout/Layout'
import { getAllDocumentNames, getDocumentContent } from 'tools/readDocuments'
import { Params } from '@/@types/types'
import { MarkdownPreviewer } from '@/components'

type Props = {
  documentContents: string
}

export const getStaticPaths = () => {
  const paths = getAllDocumentNames()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params }: { params: Params }) => {
  if (!params.name) return
  const contents = getDocumentContent(params.name)

  return {
    props: { documentContents: contents },
  }
}

const Documents: React.FC<Props> = ({ documentContents }) => {
  return (
    <Layout>
      <MarkdownPreviewer source={documentContents} />
    </Layout>
  )
}

export default Documents
