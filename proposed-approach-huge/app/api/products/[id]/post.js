module.exports = function PostProductsproductsid(req, res) {
  res.send({
    command: 'POSTProductsproductsid',
    resource: 'products',
    method: 'POST',
    path: '/products/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};