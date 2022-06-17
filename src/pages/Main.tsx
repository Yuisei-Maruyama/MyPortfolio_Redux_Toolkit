import React from 'react'
import styled from 'styled-components'
import { SkillTables, MarkdownPreviewer } from '@/components'

type Props = {
  documentContents: string
}

const Main: React.FC<Props> = ({ documentContents }) => {
  return (
    <_Container>
      <div style={{ backgroundColor: '#000' }}>
        <MarkdownPreviewer source={documentContents} />
      </div>
      <SkillTables />
    </_Container>
  )
}

const _Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
`

export default Main
