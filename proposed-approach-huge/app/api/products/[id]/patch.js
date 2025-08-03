module.exports = function PatchProductsproductsid(req, res) {
  res.send({
    command: 'PATCHProductsproductsid',
    resource: 'products',
    method: 'PATCH',
    path: '/products/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};