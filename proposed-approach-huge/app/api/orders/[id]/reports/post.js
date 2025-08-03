module.exports = function PostOrdersordersidreports(req, res) {
  res.send({
    command: 'POSTOrdersordersidreports',
    resource: 'orders',
    method: 'POST',
    path: '/orders/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};