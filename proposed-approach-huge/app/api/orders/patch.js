module.exports = function PatchOrdersorders(req, res) {
  res.send({
    command: 'PATCHOrdersorders',
    resource: 'orders',
    method: 'PATCH',
    path: '/orders',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};