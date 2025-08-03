module.exports = function GetImportsimportsid(req, res) {
  res.send({
    command: 'GETImportsimportsid',
    resource: 'imports',
    method: 'GET',
    path: '/imports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};