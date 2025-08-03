module.exports = function DeleteCategoriescategories(req, res) {
  res.send({
    command: 'DELETECategoriescategories',
    resource: 'categories',
    method: 'DELETE',
    path: '/categories',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};