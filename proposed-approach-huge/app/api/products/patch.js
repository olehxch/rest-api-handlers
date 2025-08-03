module.exports = function PatchProductsproducts(req, res) {
  res.send({
    command: 'PATCHProductsproducts',
    resource: 'products',
    method: 'PATCH',
    path: '/products',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};