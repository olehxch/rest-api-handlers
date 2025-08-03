module.exports = function PostImportsimportsid(req, res) {
  res.send({
    command: 'POSTImportsimportsid',
    resource: 'imports',
    method: 'POST',
    path: '/imports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};