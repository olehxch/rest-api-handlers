module.exports = function GetProductsproductsidreports(req, res) {
  res.send({
    command: 'GETProductsproductsidreports',
    resource: 'products',
    method: 'GET',
    path: '/products/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};