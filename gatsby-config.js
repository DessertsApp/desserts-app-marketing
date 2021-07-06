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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-199286140-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
