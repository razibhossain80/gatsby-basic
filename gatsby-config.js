/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://jsonplaceholder.typicode.com/posts"
      }
  },
  ],

  siteMetadata:{
    title:"basic",
    description:"basic"
  }
}
