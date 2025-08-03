module.exports = function PutDealsdealsid(req, res) {
  res.send({
    command: 'PUTDealsdealsid',
    resource: 'deals',
    method: 'PUT',
    path: '/deals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};