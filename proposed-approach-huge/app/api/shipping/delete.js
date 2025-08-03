module.exports = function DeleteShippingshipping(req, res) {
  res.send({
    command: 'DELETEShippingshipping',
    resource: 'shipping',
    method: 'DELETE',
    path: '/shipping',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};