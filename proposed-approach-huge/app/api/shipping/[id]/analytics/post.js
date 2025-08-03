module.exports = function PostShippingshippingidanalytics(req, res) {
  res.send({
    command: 'POSTShippingshippingidanalytics',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};