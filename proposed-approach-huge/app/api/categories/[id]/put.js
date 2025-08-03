module.exports = function PutCategoriescategoriesid(req, res) {
  res.send({
    command: 'PUTCategoriescategoriesid',
    resource: 'categories',
    method: 'PUT',
    path: '/categories/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};