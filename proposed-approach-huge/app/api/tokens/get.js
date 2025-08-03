module.exports = function GetTokenstokens(req, res) {
  res.send({
    command: 'GETTokenstokens',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};