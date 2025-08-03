module.exports = function DeleteImportsimportsid(req, res) {
  res.send({
    command: 'DELETEImportsimportsid',
    resource: 'imports',
    method: 'DELETE',
    path: '/imports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};