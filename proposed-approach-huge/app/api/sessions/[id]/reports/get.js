module.exports = function GetSessionssessionsidreports(req, res) {
  res.send({
    command: 'GETSessionssessionsidreports',
    resource: 'sessions',
    method: 'GET',
    path: '/sessions/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};