module.exports = function PostShippingshippingiddetails(req, res) {
  res.send({
    command: 'POSTShippingshippingiddetails',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};