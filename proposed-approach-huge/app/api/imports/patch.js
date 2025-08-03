module.exports = function PatchImportsimports(req, res) {
  res.send({
    command: 'PATCHImportsimports',
    resource: 'imports',
    method: 'PATCH',
    path: '/imports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};