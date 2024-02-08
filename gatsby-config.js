module.exports = {
  siteMetadata: {
    title: `Aspire`,
    description: `A unified solution designed to manage your global business operations and scale company spend, all-in-one account`,
    author: `@GyanenderSingh`,
    siteUrl: `https://aspireapp.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
}
