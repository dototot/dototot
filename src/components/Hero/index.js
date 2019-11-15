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
      <Slider
        pauseOnHover={false}
        autoplay
        fade
        arrows={false}
        autoplaySpeed={7000}
      >
        <Img sizes={{ ...data.slide1.childImageSharp.fluid, aspectRatio: 18 / 9 }} />
        <Img sizes={{ ...data.slide2.childImageSharp.fluid, aspectRatio: 18 / 9 }} />
        <Img sizes={{ ...data.slide3.childImageSharp.fluid, aspectRatio: 18 / 9 }} />
      </Slider>
      {/* <h1 className={css.heading}>
        Inspiring and empowering learners to produce professional media with
        free and open source software&hellip;
      </h1> */}
    </>
  )
}

export default Hero
