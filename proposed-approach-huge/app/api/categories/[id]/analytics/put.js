module.exports = function PutCategoriescategoriesidanalytics(req, res) {
  res.send({
    command: 'PUTCategoriescategoriesidanalytics',
    resource: 'categories',
    method: 'PUT',
    path: '/categories/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};