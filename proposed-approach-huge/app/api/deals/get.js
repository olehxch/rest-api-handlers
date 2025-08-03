module.exports = function GetDealsdeals(req, res) {
  res.send({
    command: 'GETDealsdeals',
    resource: 'deals',
    method: 'GET',
    path: '/deals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};