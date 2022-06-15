import type { NextPageWithLayout } from 'next'
import Layout from '@/layout/Layout'
import Main from './Main'
// import {
//   SkillTables
// } from 'portfolio/src/components'

const Home: NextPageWithLayout = () => {

  return (
    <Main />
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
