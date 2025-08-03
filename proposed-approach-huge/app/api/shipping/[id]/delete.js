module.exports = function DeleteShippingshippingid(req, res) {
  res.send({
    command: 'DELETEShippingshippingid',
    resource: 'shipping',
    method: 'DELETE',
    path: '/shipping/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};