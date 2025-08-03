module.exports = function PutProductsproductsiddetails(req, res) {
  res.send({
    command: 'PUTProductsproductsiddetails',
    resource: 'products',
    method: 'PUT',
    path: '/products/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};