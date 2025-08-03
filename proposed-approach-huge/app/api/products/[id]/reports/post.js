module.exports = function PostProductsproductsidreports(req, res) {
  res.send({
    command: 'POSTProductsproductsidreports',
    resource: 'products',
    method: 'POST',
    path: '/products/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};