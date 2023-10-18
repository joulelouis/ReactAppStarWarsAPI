const express = require('express');
const app = express();
const cors = require('cors');


var corsOptions = {
    origin: 'https://develop.d2xuxanvg7ko3t.amplifyapp.com/api/characters?format=json',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.get('/products/:id', cors(corsOptions), function (req, res, next) {
    res.json()
  })

app.listen(4000, () => console.log('Server is listening on port 5000'));