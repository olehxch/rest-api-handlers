module.exports = function GetCategoriescategories(req, res) {
  res.send({
    command: 'GETCategoriescategories',
    resource: 'categories',
    method: 'GET',
    path: '/categories',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};