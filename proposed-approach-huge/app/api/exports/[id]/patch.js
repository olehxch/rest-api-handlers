module.exports = function PatchExportsexportsid(req, res) {
  res.send({
    command: 'PATCHExportsexportsid',
    resource: 'exports',
    method: 'PATCH',
    path: '/exports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};