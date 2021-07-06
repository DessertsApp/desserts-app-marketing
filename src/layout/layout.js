import * as React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { graphql, StaticQuery } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from '../components/Footer'

import myTheme from "../theme"
import './layout.css'

// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

// Layout wrapper for all pages
const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={myTheme}>
          <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          { children }
          <Footer/>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout
