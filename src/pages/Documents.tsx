import React from 'react'
import { getAllDocumentNames } from 'tools/readDocuments'
import { DocumentList } from '@/components'
import Layout from '@/layout/Layout'
import styled from 'styled-components'
import { GetStaticProps } from 'next'

type Props = {
  documentNames: string[]
}

export const getStaticProps: GetStaticProps = async () => {
  const documentNames = getAllDocumentNames().map((documentName) => documentName.params.name)

  return {
    props: { documentNames },
  }
}

const Documents: React.FC<Props> = ({ documentNames }) => {
  return (
    <Layout>
      <_DocumentWrapper>
        <DocumentList documentNames={documentNames} />
      </_DocumentWrapper>
    </Layout>
  )
}

const _DocumentWrapper = styled.div`
  width: 90%;
  margin: 50px auto 0;
  display: flex;
`

export default Documents
