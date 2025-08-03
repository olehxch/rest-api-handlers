module.exports = function PutImportsimports(req, res) {
  res.send({
    command: 'PUTImportsimports',
    resource: 'imports',
    method: 'PUT',
    path: '/imports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};