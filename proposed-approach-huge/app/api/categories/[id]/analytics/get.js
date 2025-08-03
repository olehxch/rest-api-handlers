module.exports = function GetCategoriescategoriesidanalytics(req, res) {
  res.send({
    command: 'GETCategoriescategoriesidanalytics',
    resource: 'categories',
    method: 'GET',
    path: '/categories/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};