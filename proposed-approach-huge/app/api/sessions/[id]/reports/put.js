module.exports = function PutSessionssessionsidreports(req, res) {
  res.send({
    command: 'PUTSessionssessionsidreports',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};