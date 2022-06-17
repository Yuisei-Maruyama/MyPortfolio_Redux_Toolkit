import type { NextPageWithLayout } from 'next'
import Layout from '@/layout/Layout'
import Main from './Main'
import { getDocumentContent } from 'tools/readDocuments'
// import {
//   SkillTables
// } from 'portfolio/src/components'

type Props = {
  documentContents?: string
}

export const getStaticProps = () => {
  const contents = getDocumentContent('README')
  return {
    props: { documentContents: contents },
  }
}

const Home: NextPageWithLayout<Props> = ({ documentContents }) => {
  return documentContents ? <Main documentContents={documentContents} /> : <></>
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
