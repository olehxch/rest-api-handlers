module.exports = function GetCategoriescategoriesiddetails(req, res) {
  res.send({
    command: 'GETCategoriescategoriesiddetails',
    resource: 'categories',
    method: 'GET',
    path: '/categories/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};