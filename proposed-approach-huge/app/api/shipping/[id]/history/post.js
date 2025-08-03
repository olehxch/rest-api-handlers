module.exports = function PostShippingshippingidhistory(req, res) {
  res.send({
    command: 'POSTShippingshippingidhistory',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};