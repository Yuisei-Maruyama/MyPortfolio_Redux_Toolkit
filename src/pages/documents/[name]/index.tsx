import React from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import Layout from '@/layout/Layout'
import { getAllDocumentNames, getDocumentContent } from 'tools/readDocuments'
import { Params } from '@/@types/types'
import { MarkdownPreviewer, DocumentList } from '@/components'
import { _DocumentWrapper } from '@/pages/documents'
import styled from 'styled-components'

type Props = {
  documentContents: string
  documentNames: string[]
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
  const documentNames = getAllDocumentNames().map((documentName) => documentName.params.name)

  return {
    props: { documentContents: contents, documentNames },
  }
}

const Documents: React.FC<Props> = ({ documentContents, documentNames }) => {
  return (
    <Layout>
      <_DocumentWrapper>
        <DocumentList documentNames={documentNames} />
        <_MarkdownPreviewerWrapper>
          <MarkdownPreviewer source={documentContents} />
        </_MarkdownPreviewerWrapper>
      </_DocumentWrapper>
    </Layout>
  )
}

const _MarkdownPreviewerWrapper = styled.div`
  margin-left: 150px;
  & > div {
    width: 1500px;
    padding-bottom: 120px;
  }
`

export default Documents
