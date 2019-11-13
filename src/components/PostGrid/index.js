import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import css from './styles.module.css'

const PostGrid = ({ edges }) => (
    <div className={css.posts}>
        {edges.map(({ node }) => (
            <article key={node.fields.slug}>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
                <Link to={node.fields.slug}>
                    &hellip;read more
                </Link>
            </article>
        ))}
    </div>
)

export default PostGrid