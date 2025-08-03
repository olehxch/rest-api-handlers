module.exports = function PatchVersionsversions(req, res) {
  res.send({
    command: 'PATCHVersionsversions',
    resource: 'versions',
    method: 'PATCH',
    path: '/versions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};