module.exports = function PutOrdersordersid(req, res) {
  res.send({
    command: 'PUTOrdersordersid',
    resource: 'orders',
    method: 'PUT',
    path: '/orders/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};