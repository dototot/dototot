import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import css from "./styles.module.css"

const PuppetPatterns = () => {
  const data = useStaticQuery(graphql`
    query {
      foxImg: file(relativePath: { eq: "fox_puppet_cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pythonImg: file(relativePath: { eq: "python_puppet_cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      penguinImg: file(relativePath: { eq: "penguin_puppet_cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      gnuImg: file(relativePath: { eq: "gnu_puppet_cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={css.puppetPatterns}>
      <div>
        <a
          href="https://gumroad.com/l/python-puppet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.pythonImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/penguin-puppet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.penguinImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/gnu-puppet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.gnuImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/fox-puppet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.foxImg.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}

export default PuppetPatterns
