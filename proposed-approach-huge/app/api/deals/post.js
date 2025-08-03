module.exports = function PostDealsdeals(req, res) {
  res.send({
    command: 'POSTDealsdeals',
    resource: 'deals',
    method: 'POST',
    path: '/deals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};