module.exports = function PostCategoriescategoriesidhistory(req, res) {
  res.send({
    command: 'POSTCategoriescategoriesidhistory',
    resource: 'categories',
    method: 'POST',
    path: '/categories/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};