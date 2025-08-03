module.exports = function GetProjectsprojects(req, res) {
  res.send({
    command: 'GETProjectsprojects',
    resource: 'projects',
    method: 'GET',
    path: '/projects',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};