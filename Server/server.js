require("es6-promise").polyfill();
require("isomorphic-fetch");
require("dotenv").config();

const APIkey = process.env.APIkey;
const APIsecret = process.env.APIsecret;
const baseURL = " https://www.goodreads.com/search/index.xml";

const express = require("express");
const app = express();

var parseString = require("xml2js").parseString;
// var xml = "<root>Hello xml2js!</root>";
// parseString(xml, function(err, result) {
//   console.dir(result);
// });

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function checkStatus(response) {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
}

/*HTTP method: GET
Parameters:
q: The query text to match against book title, author, and ISBN fields. Supports boolean operators and phrase searching.
page: Which page to return (default 1, optional)
key: Developer key (required).
search[field]: Field to search, one of 'title', 'author', or 'all' (default is 'all')

*/

/*app.get("/api/read", (req, res, next) => {
  console.log("Requesting data from Goodreads");

  // fetch(`${baseUrl}`, {
  //   method: "GET",
  //   body: JSON.stringify(data),
  //   headers: {
  //   "Content-Type": "application/json"
  //   },
  //   credentials: "same-origin"
  // }))
  //   .then(checkStatus)
  //   .then(parseJSON)
  //   .then(json => {
  //     // Sends a json response from Express
  //     res.json(json);
  //   })
  //   .catch(error => {
  //     next(error);
  //   });

  fetch(
    `https://www.goodreads.com/search.xml?key=${
      process.env.APIkey
    }&q=Ender%27s+Game`
  )
    .then(checkStatus)
    .then(response => {
      parseString(response, function(err, result) {
        console.log(response);
      });
    })
    .then(result => JSON.stringify(result))
    .then(console.log);
  // .catch(err={
  //   console.log(err);
  // })
});*/
app.get("/api/goodreads", async (req, res) => {
  try {
    let query = req.query;
    let response = await fetch(
      `https://www.goodreads.com/search.xml?key=${
        process.env.APIkey
      }&q=Ender%27s+Game`
    ); 
    response = await parseString(response);
    //response = await response.text();
    response = await JSON.stringify(response)
    console.log(response);
   
    //console.log(response)
    res.json(response);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

function errorHandler(err, req, res, next) {
  console.error("Error: ", err.stack);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
