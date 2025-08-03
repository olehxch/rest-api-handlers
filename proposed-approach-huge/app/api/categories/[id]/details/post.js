module.exports = function PostCategoriescategoriesiddetails(req, res) {
  res.send({
    command: 'POSTCategoriescategoriesiddetails',
    resource: 'categories',
    method: 'POST',
    path: '/categories/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};