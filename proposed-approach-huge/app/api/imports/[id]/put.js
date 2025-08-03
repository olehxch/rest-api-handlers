module.exports = function PutImportsimportsid(req, res) {
  res.send({
    command: 'PUTImportsimportsid',
    resource: 'imports',
    method: 'PUT',
    path: '/imports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};