module.exports = function PutSessionssessionsidhistory(req, res) {
  res.send({
    command: 'PUTSessionssessionsidhistory',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};