module.exports = function PatchImportsimportsid(req, res) {
  res.send({
    command: 'PATCHImportsimportsid',
    resource: 'imports',
    method: 'PATCH',
    path: '/imports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};