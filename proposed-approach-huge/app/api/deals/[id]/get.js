module.exports = function GetDealsdealsid(req, res) {
  res.send({
    command: 'GETDealsdealsid',
    resource: 'deals',
    method: 'GET',
    path: '/deals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};