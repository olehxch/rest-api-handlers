module.exports = function DeleteProductsproducts(req, res) {
  res.send({
    command: 'DELETEProductsproducts',
    resource: 'products',
    method: 'DELETE',
    path: '/products',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};