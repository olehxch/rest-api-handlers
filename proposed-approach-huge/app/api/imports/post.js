module.exports = function PostImportsimports(req, res) {
  res.send({
    command: 'POSTImportsimports',
    resource: 'imports',
    method: 'POST',
    path: '/imports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};