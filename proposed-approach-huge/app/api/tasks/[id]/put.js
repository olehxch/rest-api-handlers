module.exports = function PutTaskstasksid(req, res) {
  res.send({
    command: 'PUTTaskstasksid',
    resource: 'tasks',
    method: 'PUT',
    path: '/tasks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};