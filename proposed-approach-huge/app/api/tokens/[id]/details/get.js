module.exports = function GetTokenstokensiddetails(req, res) {
  res.send({
    command: 'GETTokenstokensiddetails',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};