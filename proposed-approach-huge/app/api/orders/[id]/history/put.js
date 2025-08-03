module.exports = function PutOrdersordersidhistory(req, res) {
  res.send({
    command: 'PUTOrdersordersidhistory',
    resource: 'orders',
    method: 'PUT',
    path: '/orders/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};