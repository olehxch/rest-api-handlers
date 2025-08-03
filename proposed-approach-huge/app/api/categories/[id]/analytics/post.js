module.exports = function PostCategoriescategoriesidanalytics(req, res) {
  res.send({
    command: 'POSTCategoriescategoriesidanalytics',
    resource: 'categories',
    method: 'POST',
    path: '/categories/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};