import React from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic, { DynamicOptions, Loader } from 'next/dynamic'
import Layout from '@/layout/Layout'
import { getAllDocumentNames, getDocumentContent } from 'tools/readDocuments'
import { Params } from '@/@types/types'
import styled from 'styled-components'

type Props = {
  documentContents: string
}

type DinamicProps = DynamicOptions<{}> | Loader<{}>

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

const MarkdownPreviewer: React.FC<{ source: string }> | React.ComponentType<{}> = dynamic(
  (() =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown
    })) as DinamicProps,
  { ssr: false }
)

const Documents: React.FC<Props> = ({ documentContents }) => {
  return (
    <Layout>
      <div data-color-mode="dark">
        <_MarkdownWrapper>
          <$MarkdownPreviewer source={documentContents} />
        </_MarkdownWrapper>
      </div>
    </Layout>
  )
}

const _MarkdownWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
`

const $MarkdownPreviewer = styled(MarkdownPreviewer)`
  padding: 30px;
  font-size: 24px;
  & code {
    color: var(--color-prettylights-syntax-entity-tag);
  }
`

export default Documents
