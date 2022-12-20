<h1 align="center">
  Desserts App
</h1>

## 🚀 Setup Guide

1.  **Clone from Git and install dependancies**

    ```shell
    yarn
    ```

2.  **Starting the developer environment**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd desserts-app-marketing/
    yarn start
    ```
    <mark>*Note: </mark> For `EmailForm.js` to work you must set env variables for `.env.development` and `.env.production`. Found on Emailjs dashboard with `thedessertsapp@gmail.com`.

3.  **See live changes from the browser**

    Your site is now running at http://localhost:8000!

    Wrapper for all pages is `src/layout/layout.js`

    Homepage is `src/pages/index.js`

4.  **Deploying to Github Pages**

    Using the `gh-pages` plugin we can build our site and publish it on a seperate (gh-pages) branch to utilize Github Pages for hosting.

    ```shell
    yarn deploy
    ```

    See more here -> [Gatsby gh-pages docs](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
