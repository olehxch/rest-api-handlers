module.exports = function PutDealsdeals(req, res) {
  res.send({
    command: 'PUTDealsdeals',
    resource: 'deals',
    method: 'PUT',
    path: '/deals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};