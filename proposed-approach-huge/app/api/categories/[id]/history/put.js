module.exports = function PutCategoriescategoriesidhistory(req, res) {
  res.send({
    command: 'PUTCategoriescategoriesidhistory',
    resource: 'categories',
    method: 'PUT',
    path: '/categories/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};