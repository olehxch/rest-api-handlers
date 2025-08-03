module.exports = function PostOrdersordersidanalytics(req, res) {
  res.send({
    command: 'POSTOrdersordersidanalytics',
    resource: 'orders',
    method: 'POST',
    path: '/orders/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};