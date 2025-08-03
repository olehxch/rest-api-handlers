module.exports = function GetTaskstasks(req, res) {
  res.send({
    command: 'GETTaskstasks',
    resource: 'tasks',
    method: 'GET',
    path: '/tasks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};