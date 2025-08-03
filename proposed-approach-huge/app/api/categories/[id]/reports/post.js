module.exports = function PostCategoriescategoriesidreports(req, res) {
  res.send({
    command: 'POSTCategoriescategoriesidreports',
    resource: 'categories',
    method: 'POST',
    path: '/categories/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};