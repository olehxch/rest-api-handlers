module.exports = function PostSessionssessions(req, res) {
  res.send({
    command: 'POSTSessionssessions',
    resource: 'sessions',
    method: 'POST',
    path: '/sessions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};