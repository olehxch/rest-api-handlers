module.exports = function PostReportsreportsidhistory(req, res) {
  res.send({
    command: 'POSTReportsreportsidhistory',
    resource: 'reports',
    method: 'POST',
    path: '/reports/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};