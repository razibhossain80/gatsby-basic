import React from "react"
import {graphql, Link} from "gatsby"
import Layout from '../components/Layout'

export default function Home({data}) {
  // const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <h2>This is home page</h2>
      <p>Anim deserunt quis sint aliqua elit.</p>
    </Layout>
  )
}


// export const query = graphql`
// query siteInfo {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
// }
// `
