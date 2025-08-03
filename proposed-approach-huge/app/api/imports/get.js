module.exports = function GetImportsimports(req, res) {
  res.send({
    command: 'GETImportsimports',
    resource: 'imports',
    method: 'GET',
    path: '/imports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};