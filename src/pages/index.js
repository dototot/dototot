import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import SectionHeading from "../components/SectionHeading"
import VideoSeries from "../components/VideoSeries"
import PuppetPatterns from "../components/PuppetPatterns"

const IndexPage = () => (
  <Layout>
    <SEO title="Engaging Education" />
    <Hero />
    <SectionHeading>
      Learn computer science, programming, and web development with your
      educational <em>super friends</em>.
    </SectionHeading>
    <VideoSeries />
    <SectionHeading>
      Craft your own fleece and foam character with our complete, ready-to-print
      puppet patterns.
    </SectionHeading>
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
