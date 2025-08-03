module.exports = function PutSessionssessionsidanalytics(req, res) {
  res.send({
    command: 'PUTSessionssessionsidanalytics',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};