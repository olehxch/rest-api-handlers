module.exports = function PostShippingshipping(req, res) {
  res.send({
    command: 'POSTShippingshipping',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};