module.exports = function PutShippingshippingidreports(req, res) {
  res.send({
    command: 'PUTShippingshippingidreports',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};