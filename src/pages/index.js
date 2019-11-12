import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from '../components/Hero';
import PuppetPatterns from "../components/PuppetPatterns";

const IndexPage = () => (
  <Layout>
    <SEO title="Dototot" />
    <Hero />
    <h3>Craft your own fleece and foam character with our complete, ready-to-print python puppet pattern.</h3>
    <PuppetPatterns />
  </Layout>
)

export default IndexPage

// export const query = graphql`
// query {
//   allMarkdownRemark {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           description
//         }
//       }
//     }
//   }
// }
// `;