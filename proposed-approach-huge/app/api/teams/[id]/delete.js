module.exports = function DeleteTeamsteamsid(req, res) {
  res.send({
    command: 'DELETETeamsteamsid',
    resource: 'teams',
    method: 'DELETE',
    path: '/teams/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};