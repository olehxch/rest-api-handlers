module.exports = function PostOrdersordersidhistory(req, res) {
  res.send({
    command: 'POSTOrdersordersidhistory',
    resource: 'orders',
    method: 'POST',
    path: '/orders/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};