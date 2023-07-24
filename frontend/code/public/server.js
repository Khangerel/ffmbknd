const express = require("express");
const path = require("path");
const useragent = require("express-useragent");
const React = require("react");
const { HelmetProvider } = require("react-helmet-async");
const { renderToString } = require("react-dom/server");
const { Helmet } = require("react-helmet-async");
const { StaticRouter } = require("react-router-dom");
const App = require("./src/App").default;

const app = express();

// Serve the static build folder
app.use(express.static(path.join(__dirname, "build")));

// Middleware to detect social media crawlers
app.use(useragent.express());

// Server-side rendering for social media crawlers
app.get("*", (req, res) => {
    const context = {};

    // Render the app for the social media crawler request
    if (
        req.useragent.isFacebook || // Facebook crawler
        req.useragent.isTwitter // Twitter crawler
        // Add other crawlers if necessary
    ) {
        const helmetContext = {};
        const appMarkup = renderToString(
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        );

        // Extract the meta tags from the Helmet context
        const helmetData = helmetContext.helmet;

        // Generate the full HTML response including meta tags
        const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.75" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/okta-neue"
          rel="stylesheet"
        />
        <title>Faro Foundation NGO</title>
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        ${helmetData.link.toString()}
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script
          src="/static/js/main.c22a11aa.js"
          crossorigin="anonymous"
        ></script>
        <link href="/static/css/main.93e5acce.css" rel="stylesheet" />
        <style type="text/css">
          @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
        </style>
      </body>
      </html>
    `;

        res.send(html);
    } else {
        // Serve the normal client-side rendered app for regular requests
        res.sendFile(path.join(__dirname, "build", "index.html"));
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});