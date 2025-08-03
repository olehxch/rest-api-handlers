module.exports = function PutProjectsprojects(req, res) {
  res.send({
    command: 'PUTProjectsprojects',
    resource: 'projects',
    method: 'PUT',
    path: '/projects',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};