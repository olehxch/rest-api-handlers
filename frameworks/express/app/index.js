const router = require('express').Router({ mergeParams: true });
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
const port = 3000;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/satellites', api.satellites.get);
app.post('/satellites', api.satellites.post);
app.get('/satellites/:id', api.satellites.id.get);
app.patch('/satellites/:id', api.satellites.id.patch);
app.put('/satellites/:id', api.satellites.id.put);
app.delete('/satellites/:id', api.satellites.id.delete); 
app.get('/satellites/:id/details', api.satellites.id.details.get);
app.get('/satellites/:id/details/:detailId', api.satellites.id.details.detailId.get);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
