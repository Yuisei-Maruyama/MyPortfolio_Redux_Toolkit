import React, { useState } from 'react'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic, { DynamicOptions, Loader } from 'next/dynamic'
import styled from 'styled-components'
import Layout from '@/layout/Layout'
import { getAllDocumentNames, getDocumentContent } from 'tools/readDocuments'
import { Params } from '@/@types/types'

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

const MDEditor:
  | React.FC<{ value: string; onChange: React.Dispatch<React.SetStateAction<string>> }>
  | React.ComponentType<{}> = dynamic(
  (() => import('@uiw/react-md-editor').then((mod) => mod.default)) as DinamicProps,
  { ssr: false }
)
const MarkdownPreviewer: React.FC<{ source: string }> | React.ComponentType<{}> = dynamic(
  (() =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown
    })) as DinamicProps,
  { ssr: false }
)

const DocumentsEditor: React.FC<Props> = ({ documentContents }) => {
  const [value, setValue] = useState<string>(documentContents)
  return (
    <Layout>
      <div data-color-mode="dark">
        <_MarkdownWrapper>
          <$MDEditor value={value} onChange={setValue} />
          <$MarkdownPreviewer source={value} />
        </_MarkdownWrapper>
      </div>
    </Layout>
  )
}

const _MarkdownWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  & > .w-md-editor-show-live {
    height: 1400px !important;
    overflow: hidden;
  }
  & .w-md-editor-toolbar {
    height: 50px !important;
    & li.active > button {
      height: 35px;
    }
    & svg {
      width: 25px;
      height: 25px;
    }
  }
  & .w-md-editor-content {
    height: 1400px !important;
  }
  & .code-line {
    font-size: 18px;
    line-height: 2;
  }
`

const $MDEditor = styled(MDEditor)`
  height: 100%;
`

const $MarkdownPreviewer = styled(MarkdownPreviewer)`
  margin-top: 100px;
  padding: 30px;
  font-size: 24px;
  & code {
    color: var(--color-prettylights-syntax-entity-tag);
  }
`

export default DocumentsEditor
