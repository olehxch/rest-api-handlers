module.exports = function PostOrdersorders(req, res) {
  res.send({
    command: 'POSTOrdersorders',
    resource: 'orders',
    method: 'POST',
    path: '/orders',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};