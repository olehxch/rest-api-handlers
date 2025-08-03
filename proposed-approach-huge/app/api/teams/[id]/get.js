module.exports = function GetTeamsteamsid(req, res) {
  res.send({
    command: 'GETTeamsteamsid',
    resource: 'teams',
    method: 'GET',
    path: '/teams/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};