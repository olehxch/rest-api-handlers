module.exports = function GetProductsproductsid(req, res) {
  res.send({
    command: 'GETProductsproductsid',
    resource: 'products',
    method: 'GET',
    path: '/products/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};