module.exports = function PatchExportsexports(req, res) {
  res.send({
    command: 'PATCHExportsexports',
    resource: 'exports',
    method: 'PATCH',
    path: '/exports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};