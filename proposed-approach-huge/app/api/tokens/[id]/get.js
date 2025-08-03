module.exports = function GetTokenstokensid(req, res) {
  res.send({
    command: 'GETTokenstokensid',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};