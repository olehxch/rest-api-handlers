module.exports = function DeleteReportsreports(req, res) {
  res.send({
    command: 'DELETEReportsreports',
    resource: 'reports',
    method: 'DELETE',
    path: '/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};