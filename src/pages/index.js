import React from "react"
import {graphql, Link} from "gatsby"
import Layout from '../components/Layout'

export default function Home({data}) {
  console.log(data)
  const allPost = data.allCustomApi.nodes
  // const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <h2>This is home page</h2>
      <p>Anim deserunt quis sint aliqua elit.</p>
     {allPost.map((post,index)=>{
       return(
        <p key={index}>
          {post.title}
        </p>
       )
      })}
    </Layout>
  )
}

export const query =graphql`
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
