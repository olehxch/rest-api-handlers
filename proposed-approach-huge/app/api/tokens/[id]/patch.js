module.exports = function PatchTokenstokensid(req, res) {
  res.send({
    command: 'PATCHTokenstokensid',
    resource: 'tokens',
    method: 'PATCH',
    path: '/tokens/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};