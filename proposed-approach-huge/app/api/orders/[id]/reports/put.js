module.exports = function PutOrdersordersidreports(req, res) {
  res.send({
    command: 'PUTOrdersordersidreports',
    resource: 'orders',
    method: 'PUT',
    path: '/orders/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};