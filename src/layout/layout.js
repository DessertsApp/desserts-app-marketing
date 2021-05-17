import * as React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { graphql, StaticQuery } from "gatsby"
import NavBar from "../components/NavBar"

import myTheme from "../theme"
import './layout.css'

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
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={myTheme}>
          <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          { children }
        </ThemeProvider>
      )}
    />
  )
}

export default Layout
