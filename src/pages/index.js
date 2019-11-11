import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/main"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ImgQuery {
      placeholderImage: file(relativePath: { eq: "slides/2.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="Dototot" />
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <p>
        Inspiring and empowering learners to produce professional media with
        free and open source software.
      </p>
      <hr />
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
            <Link to={node.fields.slug}>Read More</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
