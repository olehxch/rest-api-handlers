module.exports = function DeleteSessionssessions(req, res) {
  res.send({
    command: 'DELETESessionssessions',
    resource: 'sessions',
    method: 'DELETE',
    path: '/sessions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};