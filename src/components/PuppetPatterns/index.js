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
        <h3>Python Puppet Pattern</h3>
        <p>
          Craft your own fleece and foam character with our complete,
          ready-to-print python puppet pattern.
        </p>
      </div>
      <div>
        <Img fluid={data.penguinImg.childImageSharp.fluid} />
        <h3>Penguin Puppet Pattern</h3>
        <p>
          Craft your own fleece and foam character with our complete,
          ready-to-print penguin puppet pattern.
        </p>
      </div>
      <div>
        <Img fluid={data.gnuImg.childImageSharp.fluid} />
        <h3>GNU Puppet Pattern</h3>
        <p>
          Craft your own fleece and foam character with our complete,
          ready-to-print GNU puppet pattern.
        </p>
      </div>
      <div>
        <Img fluid={data.foxImg.childImageSharp.fluid} />
        <h3>Fox Puppet Pattern</h3>
        <p>
          Craft your own fleece and foam character with our complete,
          ready-to-print fox puppet pattern.
        </p>
      </div>
    </div>
  )
}

export default PuppetPatterns
