module.exports = function PutProductsproductsidreports(req, res) {
  res.send({
    command: 'PUTProductsproductsidreports',
    resource: 'products',
    method: 'PUT',
    path: '/products/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};