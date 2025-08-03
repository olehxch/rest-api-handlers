module.exports = function GetSessionssessionsidhistory(req, res) {
  res.send({
    command: 'GETSessionssessionsidhistory',
    resource: 'sessions',
    method: 'GET',
    path: '/sessions/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};