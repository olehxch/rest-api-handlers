module.exports = function DeleteProjectsprojects(req, res) {
  res.send({
    command: 'DELETEProjectsprojects',
    resource: 'projects',
    method: 'DELETE',
    path: '/projects',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};