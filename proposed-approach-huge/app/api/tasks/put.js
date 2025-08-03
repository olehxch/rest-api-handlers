module.exports = function PutTaskstasks(req, res) {
  res.send({
    command: 'PUTTaskstasks',
    resource: 'tasks',
    method: 'PUT',
    path: '/tasks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};