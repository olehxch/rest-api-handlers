module.exports = function GetProductsproductsiddetails(req, res) {
  res.send({
    command: 'GETProductsproductsiddetails',
    resource: 'products',
    method: 'GET',
    path: '/products/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};