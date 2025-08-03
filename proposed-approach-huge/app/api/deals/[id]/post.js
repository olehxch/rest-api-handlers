module.exports = function PostDealsdealsid(req, res) {
  res.send({
    command: 'POSTDealsdealsid',
    resource: 'deals',
    method: 'POST',
    path: '/deals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};