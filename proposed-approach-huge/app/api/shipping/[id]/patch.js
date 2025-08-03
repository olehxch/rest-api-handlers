module.exports = function PatchShippingshippingid(req, res) {
  res.send({
    command: 'PATCHShippingshippingid',
    resource: 'shipping',
    method: 'PATCH',
    path: '/shipping/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};