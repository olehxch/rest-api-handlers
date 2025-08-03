module.exports = function PutCategoriescategories(req, res) {
  res.send({
    command: 'PUTCategoriescategories',
    resource: 'categories',
    method: 'PUT',
    path: '/categories',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};