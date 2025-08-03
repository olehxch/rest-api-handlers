module.exports = function PutCategoriescategoriesidreports(req, res) {
  res.send({
    command: 'PUTCategoriescategoriesidreports',
    resource: 'categories',
    method: 'PUT',
    path: '/categories/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};