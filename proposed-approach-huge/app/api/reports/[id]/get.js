module.exports = function GetReportsreportsid(req, res) {
  res.send({
    command: 'GETReportsreportsid',
    resource: 'reports',
    method: 'GET',
    path: '/reports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};