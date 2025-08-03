module.exports = function PatchDealsdeals(req, res) {
  res.send({
    command: 'PATCHDealsdeals',
    resource: 'deals',
    method: 'PATCH',
    path: '/deals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};