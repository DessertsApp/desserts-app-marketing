require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Desserts App Marketing",
    menuLinks:[
      {
          name:'Home',
          link:'/'
      },
      {
          name:'About',
          link:'/about'
      },
      {
          name:'Contact',
          link:'/contact'
      },
      {
        name:'register',
        link:'/register'
      },
    ],
    siteUrl: 'http://desserts.app/',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-material-ui",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Desserts App",
        short_name: "Desserts App",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-199286140-1", // Google Analytics / GA
          "G-8203JED8XX", // Google Analytics 4
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }, {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T5ZRX6F",
      }
    }
  ],
};
