import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout page="reviews">
      <div className={layoutStyles.section__title}>
        Reviews 
      </div> 
        <BlogList type='reviews'/>
    </Layout>
  )
}