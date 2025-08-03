module.exports = function PatchProjectsprojects(req, res) {
  res.send({
    command: 'PATCHProjectsprojects',
    resource: 'projects',
    method: 'PATCH',
    path: '/projects',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};