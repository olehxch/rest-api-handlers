module.exports = function PatchSessionssessionsid(req, res) {
  res.send({
    command: 'PATCHSessionssessionsid',
    resource: 'sessions',
    method: 'PATCH',
    path: '/sessions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};