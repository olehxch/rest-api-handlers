module.exports = function PostTeamsteams(req, res) {
  res.send({
    command: 'POSTTeamsteams',
    resource: 'teams',
    method: 'POST',
    path: '/teams',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};