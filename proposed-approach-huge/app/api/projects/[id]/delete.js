module.exports = function DeleteProjectsprojectsid(req, res) {
  res.send({
    command: 'DELETEProjectsprojectsid',
    resource: 'projects',
    method: 'DELETE',
    path: '/projects/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};