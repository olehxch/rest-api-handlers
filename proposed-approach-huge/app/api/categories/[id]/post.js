module.exports = function PostCategoriescategoriesid(req, res) {
  res.send({
    command: 'POSTCategoriescategoriesid',
    resource: 'categories',
    method: 'POST',
    path: '/categories/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};