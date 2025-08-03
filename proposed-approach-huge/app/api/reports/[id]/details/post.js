module.exports = function PostReportsreportsiddetails(req, res) {
  res.send({
    command: 'POSTReportsreportsiddetails',
    resource: 'reports',
    method: 'POST',
    path: '/reports/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};