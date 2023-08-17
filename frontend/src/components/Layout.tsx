import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode
  pageName?: string
}

const Layout: React.FC<Props> = ({ children, pageName }) => {
  let layoutClass = ""

  if (pageName) layoutClass = `${layoutClass} page-${pageName}`

  return (
    <>
      <Helmet bodyAttributes={{ class: layoutClass }}>
        <title>Find my Elote</title>
      </Helmet>
      <>
        <main>{children}</main>
      </>
    </>
  )
}

export default Layout
