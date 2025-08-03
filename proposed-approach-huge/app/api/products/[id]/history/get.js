module.exports = function GetProductsproductsidhistory(req, res) {
  res.send({
    command: 'GETProductsproductsidhistory',
    resource: 'products',
    method: 'GET',
    path: '/products/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};