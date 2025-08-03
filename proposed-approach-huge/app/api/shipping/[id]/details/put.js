module.exports = function PutShippingshippingiddetails(req, res) {
  res.send({
    command: 'PUTShippingshippingiddetails',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};