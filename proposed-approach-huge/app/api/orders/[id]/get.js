module.exports = function GetOrdersordersid(req, res) {
  res.send({
    command: 'GETOrdersordersid',
    resource: 'orders',
    method: 'GET',
    path: '/orders/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};