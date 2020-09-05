/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: `http://client.pelindo-dev.co.id`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    title: `A Gatsby Boilerplate`,
    titleTemplate: `%s | ExampleSites`,
    description: `Comes with much needed gatsby plugins such as manifest, react helmet, gatsby-image and some personal faves like google fonts and sass-support.`,
    image: `/logo.png`,
    twitterUsername: `@cdw1p`,
    facebookSiteName: `cdw1p`,
  },
  plugins: [
    `gatsby-disable-404`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Example`,
        short_name: `Example`,
        start_url: `/`,
        background_color: `#c8d6e5`,
        theme_color: `#0abde3`,
        display: `standalone`,
        icon: `src/images/manifest-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
      },
      display: `swap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
