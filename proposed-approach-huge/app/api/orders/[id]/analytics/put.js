module.exports = function PutOrdersordersidanalytics(req, res) {
  res.send({
    command: 'PUTOrdersordersidanalytics',
    resource: 'orders',
    method: 'PUT',
    path: '/orders/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};