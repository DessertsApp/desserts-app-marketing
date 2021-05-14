import * as React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import myTheme from "../theme"

import './layout.css'


// styles

// Layout wrapper for all pages
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      { children }
    </ThemeProvider>
  )
}

export default Layout
