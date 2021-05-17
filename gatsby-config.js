module.exports = {
  siteMetadata: {
    title: "Desserts App Marketing",
    menuLinks:[
      {
          name:'home',
          link:'/'
      },
      {
          name:'page2',
          link:'/page-2'
      },
      {
          name:'page3',
          link:'/page-3'
      },
      {
          name:'page3',
          link:'/page-3'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-material-ui",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
