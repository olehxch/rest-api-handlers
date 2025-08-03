module.exports = function GetTokenstokensidhistory(req, res) {
  res.send({
    command: 'GETTokenstokensidhistory',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};