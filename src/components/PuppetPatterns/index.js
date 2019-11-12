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
        <Img fluid={data.pythonImg.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.penguinImg.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.gnuImg.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.foxImg.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default PuppetPatterns
