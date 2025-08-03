module.exports = function PostSessionssessionsidreports(req, res) {
  res.send({
    command: 'POSTSessionssessionsidreports',
    resource: 'sessions',
    method: 'POST',
    path: '/sessions/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};