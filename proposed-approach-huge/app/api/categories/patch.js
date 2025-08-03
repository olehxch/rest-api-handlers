module.exports = function PatchCategoriescategories(req, res) {
  res.send({
    command: 'PATCHCategoriescategories',
    resource: 'categories',
    method: 'PATCH',
    path: '/categories',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};