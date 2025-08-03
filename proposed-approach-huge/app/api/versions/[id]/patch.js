module.exports = function PatchVersionsversionsid(req, res) {
  res.send({
    command: 'PATCHVersionsversionsid',
    resource: 'versions',
    method: 'PATCH',
    path: '/versions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};