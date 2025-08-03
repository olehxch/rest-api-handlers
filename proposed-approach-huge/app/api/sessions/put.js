module.exports = function PutSessionssessions(req, res) {
  res.send({
    command: 'PUTSessionssessions',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};