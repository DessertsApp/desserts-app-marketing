import { createMuiTheme } from '@material-ui/core/styles'

//default theme to get useful values
const MuiTheme = createMuiTheme()

//colors
export const colors = {
  text: '#4F4F4F',
  textLight: '#828282',
  primary: '#D65078',
  secondary: '#E7A04C',
}
export interface IColor {
  primary: string,
  secondary: string,
 }

//font families
const Ubuntu = '"Ubuntu", sans-serif'
const CooperBlack = '"cooper-black-std", serif'

//Mui Theme overrides
export const myTheme = createMuiTheme({
  breakpoints: {
    keys: ["xs","sm","md","lg","xl"],
    values: {
      xs: 425,
      sm: 600,
      md: 1280,
      lg: 1600,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#de7393',
      main: '#D65078',
      dark: '#953854',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ebb36f',
      main: '#E7A04C',
      dark: '#a17035',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: Ubuntu,
    h1: {
      color: colors.primary,
      fontFamily: CooperBlack,
      fontWeight: 400,
      fontSize: '3.4em',
    },
    h2: {
      color: colors.primary,
      fontFamily: CooperBlack,
      fontWeight: 400,
      fontSize: '2.6em',
    },
    h3: {
      color: colors.primary,
      fontFamily: CooperBlack,
      fontWeight: 400,
      fontSize: '1.6em',
    },
    subtitle1: {
      color: colors.textLight,
      fontWeight: 300,
      fontSize: '1.1em',
      lineHeight: 1.4,
    },
    body1: {
      color: colors.text,
      fontWeight: 300,
      fontSize: '1em',
    },
    button: {
      color: "white",
      fontWeight: 700,
      fontSize: '1.5em',
    }
  },
  shadows: ['none', '0 4px 15px 0 rgba(0, 0, 0, 0.15)', '2px 2px 12px 0 rgba(0, 0, 0, 0.2)'].concat(
    Array(22).fill('0 5px 20px 0 rgba(0, 0, 0, 0.15)'),
  ) as any,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: MuiTheme.spacing(2),
        paddingRight: MuiTheme.spacing(2),
      }
    },
    MuiButton: {
      root: {
        color: colors.textLight,
        padding: MuiTheme.spacing(1, 2.5),
        fontSize: '1em',
      },
      text: {
        padding: MuiTheme.spacing(1, 2.5)
      }
    },
    MuiChip: {
      root: {
        backgroundColor: colors.text,
        borderRadius: 8,
        color: 'white',
        fontSize: '1em',
      }
    },
    MuiTypography: {
      body1: {
        whiteSpace: 'pre-line',
      },
    }
  }
})

//style variables
export const styleVars = {
  gutter: '11.11vw',
  maxWidth: '1400px',
  navBar: '12vw',
  imgContainer: '48vw',
  contentContainer: '36vw',
  navBarMobile: '24vw',
  imgContainerMobile: '150vw',
  contentContainerMobile: '126vw',
  paperRadius: '12px',
}
export const rootStyles = {
  color: "#232129",
    paddingTop: "2em",
    maxWidth: "100vw",
    margin: 0,
    [myTheme.breakpoints.up('sm')]: {
      paddingTop: "3em",
    },
    [myTheme.breakpoints.up('md')]: {
      paddingTop: "4em",
      margin: "0 auto",
      maxWidth: "1440px",
    }
}
export const paperStyles = {
  borderRadius: styleVars.paperRadius,
  padding: "3em 16px 4em",
  overflow: "hidden",
  [myTheme.breakpoints.up('sm')]: {
    padding: '6em calc(1/12 * 100%)',
  },
  [myTheme.breakpoints.up('md')]: {
    padding: '6em calc(1/12 * 100%) 12em',
  }
}

export default myTheme