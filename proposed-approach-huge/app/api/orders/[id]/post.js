module.exports = function PostOrdersordersid(req, res) {
  res.send({
    command: 'POSTOrdersordersid',
    resource: 'orders',
    method: 'POST',
    path: '/orders/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};