module.exports = function PatchTaskstasks(req, res) {
  res.send({
    command: 'PATCHTaskstasks',
    resource: 'tasks',
    method: 'PATCH',
    path: '/tasks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};