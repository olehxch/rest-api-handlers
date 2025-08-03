module.exports = function PostShippingshippingid(req, res) {
  res.send({
    command: 'POSTShippingshippingid',
    resource: 'shipping',
    method: 'POST',
    path: '/shipping/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};