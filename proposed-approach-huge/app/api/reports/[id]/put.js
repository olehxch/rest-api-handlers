module.exports = function PutReportsreportsid(req, res) {
  res.send({
    command: 'PUTReportsreportsid',
    resource: 'reports',
    method: 'PUT',
    path: '/reports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};