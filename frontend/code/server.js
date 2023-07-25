const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation NGO")
      .replace(/__DESCRIPTION__/g, "Advancing Digital literacy, Online safety and more.");

    res.send(data)
  });
});
app.get("/news/:news_id", (req, res) => {
  const news_id = req.params.news_id;

  // Make an HTTP GET request to the API endpoint
  axios.get(`https://farofoundation.org/api/v1/post/${news_id}`)
    .then(response => {
      const newsData = response.data; // Assuming the API response has the news details
      const filePath = path.resolve(__dirname, "./build", "index.html");

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          return console.log(err);
        }
        data = data
          .replace(/__TITLE__/g, `News Page ${newsData.title}`)
          .replace(/__DESCRIPTION__/g, newsData.description)
          .replace(/__URL__/g, `https://farofoundation.org/news/${news_id}`)
          .replace(/__IMAGE__/g, newsData.image_thumbnail);

        res.send(data);
      });
    })
    .catch(error => {
      console.error("Error fetching news detail:", error);
      res.status(500).send("Error fetching news detail");
    });
});
app.get("/who-we-are", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Who We Are")
      .replace(/__DESCRIPTION__/g, "FF is a non-governmental organization that has focused on promoting adequate and accessible use of social media and digital literacy.");

    res.send(data)
  });
});
app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation About")
      .replace(/__DESCRIPTION__/g, "We are passionate about making the digital world a better place.");

    res.send(data)
  });
});
app.get("/projects", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "What We Do")
      .replace(/__DESCRIPTION__/g, "We are passionate about making the digital world a better place.");

    res.send(data)
  });
});
app.get("/partners", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation Partners")
      .replace(/__DESCRIPTION__/g, "We believe in meaningful partnership to build a better digital future.");

    res.send(data)
  });
});
app.get("/news", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation News")
      .replace(/__DESCRIPTION__/g, "Faro Foundation News.");

    res.send(data)
  });
});

app.get("/contact-us", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation NGO")
      .replace(/__DESCRIPTION__/g, "Contact Us");

    res.send(data)
  });
});
app.get("/privacy-policy", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Faro Foundation NGO")
      .replace(/__DESCRIPTION__/g, "Privace & Policy");

    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});