module.exports = function PutShippingshippingidhistory(req, res) {
  res.send({
    command: 'PUTShippingshippingidhistory',
    resource: 'shipping',
    method: 'PUT',
    path: '/shipping/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};