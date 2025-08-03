module.exports = function PostShippingshippingidreports(req, res) {
  res.send({
    command: 'POSTShippingshippingidreports',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};