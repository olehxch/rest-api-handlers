module.exports = function GetTaskstasksid(req, res) {
  res.send({
    command: 'GETTaskstasksid',
    resource: 'tasks',
    method: 'GET',
    path: '/tasks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};