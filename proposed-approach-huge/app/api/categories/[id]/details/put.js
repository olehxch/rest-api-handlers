module.exports = function PutCategoriescategoriesiddetails(req, res) {
  res.send({
    command: 'PUTCategoriescategoriesiddetails',
    resource: 'categories',
    method: 'PUT',
    path: '/categories/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};