module.exports = function PostTeamsteamsid(req, res) {
  res.send({
    command: 'POSTTeamsteamsid',
    resource: 'teams',
    method: 'POST',
    path: '/teams/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};