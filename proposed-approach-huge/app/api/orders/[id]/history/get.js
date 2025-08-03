module.exports = function GetOrdersordersidhistory(req, res) {
  res.send({
    command: 'GETOrdersordersidhistory',
    resource: 'orders',
    method: 'GET',
    path: '/orders/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};