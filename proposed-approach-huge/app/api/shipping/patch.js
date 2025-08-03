module.exports = function PatchShippingshipping(req, res) {
  res.send({
    command: 'PATCHShippingshipping',
    resource: 'shipping',
    method: 'PATCH',
    path: '/shipping',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};