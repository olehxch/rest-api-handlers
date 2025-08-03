module.exports = function PutOrdersorders(req, res) {
  res.send({
    command: 'PUTOrdersorders',
    resource: 'orders',
    method: 'PUT',
    path: '/orders',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};