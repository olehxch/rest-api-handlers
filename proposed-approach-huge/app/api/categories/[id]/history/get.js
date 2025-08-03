module.exports = function GetCategoriescategoriesidhistory(req, res) {
  res.send({
    command: 'GETCategoriescategoriesidhistory',
    resource: 'categories',
    method: 'GET',
    path: '/categories/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};