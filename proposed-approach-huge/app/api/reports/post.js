module.exports = function PostReportsreports(req, res) {
  res.send({
    command: 'POSTReportsreports',
    resource: 'reports',
    method: 'POST',
    path: '/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};