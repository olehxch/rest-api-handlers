module.exports = function PutReportsreportsiddetails(req, res) {
  res.send({
    command: 'PUTReportsreportsiddetails',
    resource: 'reports',
    method: 'PUT',
    path: '/reports/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};