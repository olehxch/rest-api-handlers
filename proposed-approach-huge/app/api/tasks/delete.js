module.exports = function DeleteTaskstasks(req, res) {
  res.send({
    command: 'DELETETaskstasks',
    resource: 'tasks',
    method: 'DELETE',
    path: '/tasks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};