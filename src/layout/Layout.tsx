import React, { ReactElement } from 'react'
import Head from 'next/head'
import { Header, Footer } from '@/components'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portfolio_Redux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
