module.exports = function GetProductsproductsidanalytics(req, res) {
  res.send({
    command: 'GETProductsproductsidanalytics',
    resource: 'products',
    method: 'GET',
    path: '/products/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};