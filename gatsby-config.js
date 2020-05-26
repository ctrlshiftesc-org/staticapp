module.exports = {
    siteMetadata: {
      description: "Personal page of Lance Hughes",
      locale: "en",
      title: "Lance Hughes",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "dark-green",
        },
      },
    ],
  }