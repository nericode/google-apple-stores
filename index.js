var express = require("express");
var app = express();
var gplay = require("google-play-scraper");
var store = require("app-store-scraper");

app.get("/", function (request, response) {
  if (request.query.os === "android") {
    gplay
      .app({ appId: request.query.appId, lang: "es", country: "mx" })
      .then((r) => {
        return response.send(r);
      })
      .catch((e) => {
        return response.status(500).send(e);
      });
  } else {
    store
      .app({ id: request.query.appId, lang: "es", country: "mx" })
      .then((r) => {
        return response.send(r);
      })
      .catch((e) => {
        return response.status(500).send(e);
      });
  }
});

app.listen(3000, () => console.log("Server is running..."));
