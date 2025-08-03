module.exports = function PutTeamsteamsid(req, res) {
  res.send({
    command: 'PUTTeamsteamsid',
    resource: 'teams',
    method: 'PUT',
    path: '/teams/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};