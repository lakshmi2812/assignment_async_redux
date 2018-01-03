require('es6-promise').polyfill()
require('isomorphic-fetch')
require('dotenv').config()

const APIkey = process.env.APIkey
const APIsecret = process.env.APIsecret
const baseURL = " https://www.goodreads.com/search/index.xml"

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

function checkStatus(response) {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  // Otherwise just return the response
  return response
}


/*HTTP method: GET 
Parameters: 
q: The query text to match against book title, author, and ISBN fields. Supports boolean operators and phrase searching.
page: Which page to return (default 1, optional)
key: Developer key (required).
search[field]: Field to search, one of 'title', 'author', or 'all' (default is 'all')

*/


app.get('/api/read', (req, res, next) => {
  console.log('Requesting data from Goodreads')

  fetch(`${baseUrl}/author_url/apod?api_key=${APIkey}`)
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      // Sends a json response from Express
      res.json(json)
    })
    .catch((error) => {
      next(error)
    })
})







function errorHandler (err, req, res, next) {
  console.error('Error: ', err.stack)
  res.status(err.response ? err.response.status : 500)
  res.json({ error: err.message })
}




app.use(errorHandler)


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

