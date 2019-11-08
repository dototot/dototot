import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/main"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slides/2.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Dototot" />
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <p>
        Inspiring and empowering learners to produce
        professional media with free and open source software.
      </p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
}

export default IndexPage
