module.exports = function PatchTeamsteams(req, res) {
  res.send({
    command: 'PATCHTeamsteams',
    resource: 'teams',
    method: 'PATCH',
    path: '/teams',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};