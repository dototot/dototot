import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout/main';
import { useStaticQuery, graphql } from 'gatsby';

function BlogPost({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <article>
                <header>
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                    <h1>{post.frontmatter.title}</h1>
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
                image {
                    childImageSharp {
                        resize(width: 955, height: 520) {
                            src
                        }
                        fluid(maxWidth: 955) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`