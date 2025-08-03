module.exports = function PostProductsproducts(req, res) {
  res.send({
    command: 'POSTProductsproducts',
    resource: 'products',
    method: 'POST',
    path: '/products',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};