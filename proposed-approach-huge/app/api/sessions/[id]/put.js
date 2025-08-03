module.exports = function PutSessionssessionsid(req, res) {
  res.send({
    command: 'PUTSessionssessionsid',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};