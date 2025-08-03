module.exports = function DeleteOrdersordersid(req, res) {
  res.send({
    command: 'DELETEOrdersordersid',
    resource: 'orders',
    method: 'DELETE',
    path: '/orders/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};