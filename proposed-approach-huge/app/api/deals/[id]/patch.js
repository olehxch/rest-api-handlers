module.exports = function PatchDealsdealsid(req, res) {
  res.send({
    command: 'PATCHDealsdealsid',
    resource: 'deals',
    method: 'PATCH',
    path: '/deals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};