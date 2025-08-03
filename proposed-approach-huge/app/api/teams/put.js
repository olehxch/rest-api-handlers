module.exports = function PutTeamsteams(req, res) {
  res.send({
    command: 'PUTTeamsteams',
    resource: 'teams',
    method: 'PUT',
    path: '/teams',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};