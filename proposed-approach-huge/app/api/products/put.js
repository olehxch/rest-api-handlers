module.exports = function PutProductsproducts(req, res) {
  res.send({
    command: 'PUTProductsproducts',
    resource: 'products',
    method: 'PUT',
    path: '/products',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};