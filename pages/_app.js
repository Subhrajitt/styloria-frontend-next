
import Layout from '@/commoncomp/Layout'
import React from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

