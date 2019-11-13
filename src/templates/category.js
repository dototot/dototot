import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostGrid from '../components/PostGrid'
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Dototot" />
    <PostGrid edges={data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query CategoryQuery($category: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            image {
              childImageSharp {
                resize(width: 470, height: 240) {
                  src
                }
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
