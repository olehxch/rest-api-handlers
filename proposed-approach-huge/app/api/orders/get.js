module.exports = function GetOrdersorders(req, res) {
  res.send({
    command: 'GETOrdersorders',
    resource: 'orders',
    method: 'GET',
    path: '/orders',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};