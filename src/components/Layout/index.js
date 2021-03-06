import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import logoSvg from "../../images/logo.svg"
import css from "./styles.module.css"

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <>
      <div className={css.layout}>
        <header className={css.header}>
          <figure>
            <Link to="/">
              <img src={logoSvg} alt={title} />
              <figcaption>{title} &bull; Engaging Education</figcaption>
            </Link>
          </figure>
          <nav className={css.nav}>
            <button onClick={() => setOpen(!isOpen)}>Menu</button>
            <ul className={isOpen ? css.open : css.closed}>
              <li>
                <Link to="/puppet-patterns">Puppet Patterns</Link>
              </li>
              <li>
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link to="/et-cetera">Et Cetera</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr className={css.topBar} />
        <main>{children}</main>
        <hr className={css.bottomBar} />
        <footer className={css.footer}>
          <p>
            Dototot is a creative media company and think tank specializing in
            educational material. The contents of this website are licensed
            under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blankt"
              rel="nofollow noopener"
            >
              CC BY-NC-SA 4.0 License
            </a>
            .{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blankt"
              rel="nofollow noopener"
            >
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
