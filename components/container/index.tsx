import React, { ReactNode } from 'react'
import { Footer, NavBar } from 'components'
import Head from 'next/head'

interface Props {
  children: ReactNode
  title: string
}

export const Container = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
