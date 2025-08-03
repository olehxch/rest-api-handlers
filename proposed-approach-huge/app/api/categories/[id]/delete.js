module.exports = function DeleteCategoriescategoriesid(req, res) {
  res.send({
    command: 'DELETECategoriescategoriesid',
    resource: 'categories',
    method: 'DELETE',
    path: '/categories/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};