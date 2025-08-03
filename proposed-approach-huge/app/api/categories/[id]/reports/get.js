module.exports = function GetCategoriescategoriesidreports(req, res) {
  res.send({
    command: 'GETCategoriescategoriesidreports',
    resource: 'categories',
    method: 'GET',
    path: '/categories/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};