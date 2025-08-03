module.exports = function GetShippingshippingidreports(req, res) {
  res.send({
    command: 'GETShippingshippingidreports',
    resource: 'shipping',
    method: 'GET',
    path: '/shipping/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};