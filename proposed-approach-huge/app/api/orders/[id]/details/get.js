module.exports = function GetOrdersordersiddetails(req, res) {
  res.send({
    command: 'GETOrdersordersiddetails',
    resource: 'orders',
    method: 'GET',
    path: '/orders/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};