module.exports = function PostProjectsprojects(req, res) {
  res.send({
    command: 'POSTProjectsprojects',
    resource: 'projects',
    method: 'POST',
    path: '/projects',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};