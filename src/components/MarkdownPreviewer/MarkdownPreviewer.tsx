import React from 'react'
import dynamic, { DynamicOptions, Loader } from 'next/dynamic'
import styled from 'styled-components'

type Props = {
  source: string
}

type DinamicProps = DynamicOptions<{}> | Loader<{}>

const MarkdownPreview: React.FC<{ source: string }> | React.ComponentType<{}> = dynamic(
  (() =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown
    })) as DinamicProps,
  { ssr: false }
)

const MarkdownPreviewer: React.FC<Props> = ({ source }) => {
  return (
    <div data-color-mode="dark">
      <_MarkdownWrapper>
        <$MarkdownPreviewer source={source} />
      </_MarkdownWrapper>
    </div>
  )
}

const _MarkdownWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: scroll;
`

const $MarkdownPreviewer = styled(MarkdownPreview)`
  padding: 30px;
  font-size: 24px;
  & code {
    color: var(--color-prettylights-syntax-entity-tag);
  }
`

export default MarkdownPreviewer
