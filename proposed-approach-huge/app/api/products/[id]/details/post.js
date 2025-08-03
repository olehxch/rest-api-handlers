module.exports = function PostProductsproductsiddetails(req, res) {
  res.send({
    command: 'POSTProductsproductsiddetails',
    resource: 'products',
    method: 'POST',
    path: '/products/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};