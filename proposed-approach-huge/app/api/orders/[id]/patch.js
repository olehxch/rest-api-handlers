module.exports = function PatchOrdersordersid(req, res) {
  res.send({
    command: 'PATCHOrdersordersid',
    resource: 'orders',
    method: 'PATCH',
    path: '/orders/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};