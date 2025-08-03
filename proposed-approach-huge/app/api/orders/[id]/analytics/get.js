module.exports = function GetOrdersordersidanalytics(req, res) {
  res.send({
    command: 'GETOrdersordersidanalytics',
    resource: 'orders',
    method: 'GET',
    path: '/orders/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};