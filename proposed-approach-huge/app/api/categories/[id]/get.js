module.exports = function GetCategoriescategoriesid(req, res) {
  res.send({
    command: 'GETCategoriescategoriesid',
    resource: 'categories',
    method: 'GET',
    path: '/categories/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};