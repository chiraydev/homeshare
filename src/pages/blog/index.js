
import React from 'react'
import dynamic from "next/dynamic"
import { useMediaQuery } from 'react-responsive'
const Blog = dynamic(() => import("@/views/web/Blog"), { ssr: false })
const BlogRes = dynamic(() => import("@/views/responsive/Blog"), { ssr: false })

function Index() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    isTabletOrMobile ?  <BlogRes /> : <Blog />
  )
}

export default Index