module.exports = function PatchTemplatestemplates(req, res) {
  res.send({
    command: 'PATCHTemplatestemplates',
    resource: 'templates',
    method: 'PATCH',
    path: '/templates',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};