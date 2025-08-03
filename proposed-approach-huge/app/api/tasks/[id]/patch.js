module.exports = function PatchTaskstasksid(req, res) {
  res.send({
    command: 'PATCHTaskstasksid',
    resource: 'tasks',
    method: 'PATCH',
    path: '/tasks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};