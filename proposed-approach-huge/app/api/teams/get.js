module.exports = function GetTeamsteams(req, res) {
  res.send({
    command: 'GETTeamsteams',
    resource: 'teams',
    method: 'GET',
    path: '/teams',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};