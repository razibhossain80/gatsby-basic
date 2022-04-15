import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'

export default function Project({data}) {
  // const allProjectData = data.allMarkdownRemark.nodes
  return (
      <Layout>
          <div>Project</div>
      </Layout>
  )
}

// export const query = graphql`
//   query AllProject {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//         }
//         id
//       }
//     }
//   }
// ` 
