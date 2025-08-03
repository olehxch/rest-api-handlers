module.exports = function GetVersionsversions(req, res) {
  res.send({
    command: 'GETVersionsversions',
    resource: 'versions',
    method: 'GET',
    path: '/versions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};