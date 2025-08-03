module.exports = function DeleteTaskstasksid(req, res) {
  res.send({
    command: 'DELETETaskstasksid',
    resource: 'tasks',
    method: 'DELETE',
    path: '/tasks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};