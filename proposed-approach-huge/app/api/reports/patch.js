module.exports = function PatchReportsreports(req, res) {
  res.send({
    command: 'PATCHReportsreports',
    resource: 'reports',
    method: 'PATCH',
    path: '/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};