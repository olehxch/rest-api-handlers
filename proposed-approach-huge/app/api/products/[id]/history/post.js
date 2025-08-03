module.exports = function PostProductsproductsidhistory(req, res) {
  res.send({
    command: 'POSTProductsproductsidhistory',
    resource: 'products',
    method: 'POST',
    path: '/products/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};