module.exports = function PutReportsreportsidhistory(req, res) {
  res.send({
    command: 'PUTReportsreportsidhistory',
    resource: 'reports',
    method: 'PUT',
    path: '/reports/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};