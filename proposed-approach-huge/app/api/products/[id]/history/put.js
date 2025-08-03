module.exports = function PutProductsproductsidhistory(req, res) {
  res.send({
    command: 'PUTProductsproductsidhistory',
    resource: 'products',
    method: 'PUT',
    path: '/products/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};