module.exports = function DeleteTeamsteams(req, res) {
  res.send({
    command: 'DELETETeamsteams',
    resource: 'teams',
    method: 'DELETE',
    path: '/teams',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};