module.exports = function PostTaskstasksid(req, res) {
  res.send({
    command: 'POSTTaskstasksid',
    resource: 'tasks',
    method: 'POST',
    path: '/tasks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};