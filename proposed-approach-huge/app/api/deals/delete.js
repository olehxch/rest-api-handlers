module.exports = function DeleteDealsdeals(req, res) {
  res.send({
    command: 'DELETEDealsdeals',
    resource: 'deals',
    method: 'DELETE',
    path: '/deals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};