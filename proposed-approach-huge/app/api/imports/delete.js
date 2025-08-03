module.exports = function DeleteImportsimports(req, res) {
  res.send({
    command: 'DELETEImportsimports',
    resource: 'imports',
    method: 'DELETE',
    path: '/imports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};