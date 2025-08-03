module.exports = function PutShippingshipping(req, res) {
  res.send({
    command: 'PUTShippingshipping',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};