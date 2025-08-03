module.exports = function DeleteSessionssessionsid(req, res) {
  res.send({
    command: 'DELETESessionssessionsid',
    resource: 'sessions',
    method: 'DELETE',
    path: '/sessions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};