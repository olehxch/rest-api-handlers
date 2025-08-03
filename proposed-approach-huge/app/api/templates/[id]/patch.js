module.exports = function PatchTemplatestemplatesid(req, res) {
  res.send({
    command: 'PATCHTemplatestemplatesid',
    resource: 'templates',
    method: 'PATCH',
    path: '/templates/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};