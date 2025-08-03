module.exports = function PutShippingshippingidanalytics(req, res) {
  res.send({
    command: 'PUTShippingshippingidanalytics',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};