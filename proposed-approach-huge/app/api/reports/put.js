module.exports = function PutReportsreports(req, res) {
  res.send({
    command: 'PUTReportsreports',
    resource: 'reports',
    method: 'PUT',
    path: '/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};