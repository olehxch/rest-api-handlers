module.exports = function PatchSessionssessions(req, res) {
  res.send({
    command: 'PATCHSessionssessions',
    resource: 'sessions',
    method: 'PATCH',
    path: '/sessions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};