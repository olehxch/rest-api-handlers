module.exports = function PatchTeamsteamsid(req, res) {
  res.send({
    command: 'PATCHTeamsteamsid',
    resource: 'teams',
    method: 'PATCH',
    path: '/teams/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};