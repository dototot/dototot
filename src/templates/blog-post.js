import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

import css from "./blog-post.module.css"

function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <article>
        <header className={css.header}>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          <h1>{post.frontmatter.title}</h1>
          <ul>
            <li className="capitalize">{post.frontmatter.category}</li>
            <li>By {post.frontmatter.author}</li>
          </ul>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        author
        category
        image {
          childImageSharp {
            resize(width: 960, height: 520) {
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
`
