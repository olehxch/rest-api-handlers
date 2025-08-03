module.exports = function GetProductsproducts(req, res) {
  res.send({
    command: 'GETProductsproducts',
    resource: 'products',
    method: 'GET',
    path: '/products',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};