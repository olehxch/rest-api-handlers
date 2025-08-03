module.exports = function PostTaskstasks(req, res) {
  res.send({
    command: 'POSTTaskstasks',
    resource: 'tasks',
    method: 'POST',
    path: '/tasks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};