module.exports = function PutOrdersordersiddetails(req, res) {
  res.send({
    command: 'PUTOrdersordersiddetails',
    resource: 'orders',
    method: 'PUT',
    path: '/orders/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};