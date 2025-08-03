module.exports = function PutShippingshippingid(req, res) {
  res.send({
    command: 'PUTShippingshippingid',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};