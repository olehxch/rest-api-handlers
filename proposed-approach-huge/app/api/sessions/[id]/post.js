module.exports = function PostSessionssessionsid(req, res) {
  res.send({
    command: 'POSTSessionssessionsid',
    resource: 'sessions',
    method: 'POST',
    path: '/sessions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};