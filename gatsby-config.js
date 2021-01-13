const dotenv=require('dotenv')
if(process.env.NODE_ENV!=='production'){
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    email: "umair90@yahoo.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
