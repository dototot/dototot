import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logoSvg from '../../images/logo.svg';
import css from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata;
  return (
    <>
      <div className={css.layout}>
        <header className={css.header}>
          <figure>
            <img src={logoSvg} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
          <nav className={css.nav}>
            <ul>
              <li>Puppet Patterns</li>
              <li>Tutorials</li>
              <li>Et Cetera</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={css.footer}>
          <p>
            Dototot is a creative media company and think tank specializing in educational material. The contents of this website are licensed under a
            {' '}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blankt" rel="nofollow noopener">CC BY-NC-SA 4.0 License</a>.
            {' '}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blankt" rel="nofollow noopener">
              <img src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
