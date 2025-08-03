module.exports = function PostSessionssessionsidhistory(req, res) {
  res.send({
    command: 'POSTSessionssessionsidhistory',
    resource: 'sessions',
    method: 'POST',
    path: '/sessions/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};