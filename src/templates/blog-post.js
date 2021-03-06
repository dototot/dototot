import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PuppetPatterns from "../components/PuppetPatterns"
import css from "./blog-post.module.css"

function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article>
        <header className={css.header}>
          <Img
            sizes={{
              ...post.frontmatter.image.childImageSharp.fluid,
              aspectRatio: 960 / 520,
            }}
          />
          <div class={css.title}>
            <h1>{post.frontmatter.title}</h1>
            <ul>
              <li className="capitalize">{post.frontmatter.category}</li>
              <li>By {post.frontmatter.author}</li>
            </ul>
          </div>
        </header>
        <div
          className={css.postContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <PuppetPatterns />
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
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
