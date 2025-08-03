module.exports = function DeleteOrdersorders(req, res) {
  res.send({
    command: 'DELETEOrdersorders',
    resource: 'orders',
    method: 'DELETE',
    path: '/orders',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};