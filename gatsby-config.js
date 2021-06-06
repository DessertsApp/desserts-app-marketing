module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Desserts App Marketing",
    menuLinks:[
      {
          name:'',
          link:'/'
      },
      // {
      //     name:'page2',
      //     link:'/page-2'
      // },
      // {
      //     name:'page3',
      //     link:'/page-3'
      // },
      // {
      //     name:'page3',
      //     link:'/page-3'
      // },
    ],
    siteUrl: 'http://www.desserts.app/',
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
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
