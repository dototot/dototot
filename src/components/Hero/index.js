import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import css from "./styles.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slides/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      slide2: file(relativePath: { eq: "slides/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      slide3: file(relativePath: { eq: "slides/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <hr className={css.hr} />
      <Slider>
        <Img fluid={data.slide1.childImageSharp.fluid} />
        <Img fluid={data.slide2.childImageSharp.fluid} />
        <Img fluid={data.slide3.childImageSharp.fluid} />
      </Slider>
      <h1 className={css.heading}>
        Inspiring and empowering learners to produce professional media with
        free and open source software&hellip;
      </h1>
    </>
  )
}

export default Hero
