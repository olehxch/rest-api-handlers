module.exports = function DeleteDealsdealsid(req, res) {
  res.send({
    command: 'DELETEDealsdealsid',
    resource: 'deals',
    method: 'DELETE',
    path: '/deals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};