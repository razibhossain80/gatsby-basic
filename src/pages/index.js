import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'


export default function Home({ data }) {
  const allPost = data.allCustomApi.nodes
  return (
    <Layout>
      <h2>Home page</h2>
      {allPost.map((post, index) => {
        return (
          <p key={index}>
            {post.title}
          </p>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query Post {
  allCustomApi {
    nodes {
      body
      title
    }
  }
}
`
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
