module.exports = function PostCategoriescategories(req, res) {
  res.send({
    command: 'POSTCategoriescategories',
    resource: 'categories',
    method: 'POST',
    path: '/categories',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};