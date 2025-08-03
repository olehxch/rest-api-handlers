module.exports = function DeleteProductsproductsid(req, res) {
  res.send({
    command: 'DELETEProductsproductsid',
    resource: 'products',
    method: 'DELETE',
    path: '/products/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};