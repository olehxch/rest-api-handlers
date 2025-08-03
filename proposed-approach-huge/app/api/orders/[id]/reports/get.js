module.exports = function GetOrdersordersidreports(req, res) {
  res.send({
    command: 'GETOrdersordersidreports',
    resource: 'orders',
    method: 'GET',
    path: '/orders/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};