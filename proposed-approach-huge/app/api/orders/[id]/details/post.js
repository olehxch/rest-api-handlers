module.exports = function PostOrdersordersiddetails(req, res) {
  res.send({
    command: 'POSTOrdersordersiddetails',
    resource: 'orders',
    method: 'POST',
    path: '/orders/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};