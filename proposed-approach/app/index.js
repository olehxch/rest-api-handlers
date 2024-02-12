const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

const folderFileParser = require('./mbr');

app.use(folderFileParser.getRoutes('./api'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
