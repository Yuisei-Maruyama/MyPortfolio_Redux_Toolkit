import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type Props = {
  documentNames: string[]
}

const DocumentList: React.FC<Props> = ({ documentNames }) => {
  const router = useRouter()

  const handleClickDocument = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const selectDocName = (event.target as unknown as { textContent: string }).textContent
    router.push(`/documents/${selectDocName}`)
  }

  return (
    <div>
      {documentNames.map((documentName, index) => {
        return (
          <_DocumentName
            key={index}
            onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => handleClickDocument(e)}
          >
            {documentName}
          </_DocumentName>
        )
      })}
    </div>
  )
}

const _DocumentName = styled.p`
  padding: 0 10px;
  font-size: 20px;
  line-height: 2;
  cursor: pointer;
  &:hover {
    border: 1px solid #188fb9;
  }
`

export default DocumentList
