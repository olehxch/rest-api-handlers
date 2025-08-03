module.exports = function GetReportsreportsidhistory(req, res) {
  res.send({
    command: 'GETReportsreportsidhistory',
    resource: 'reports',
    method: 'GET',
    path: '/reports/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};