module.exports = function PutProductsproductsidanalytics(req, res) {
  res.send({
    command: 'PUTProductsproductsidanalytics',
    resource: 'products',
    method: 'PUT',
    path: '/products/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};