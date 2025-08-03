module.exports = function PutProductsproductsid(req, res) {
  res.send({
    command: 'PUTProductsproductsid',
    resource: 'products',
    method: 'PUT',
    path: '/products/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};