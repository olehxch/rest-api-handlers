module.exports = function PatchCategoriescategoriesid(req, res) {
  res.send({
    command: 'PATCHCategoriescategoriesid',
    resource: 'categories',
    method: 'PATCH',
    path: '/categories/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};