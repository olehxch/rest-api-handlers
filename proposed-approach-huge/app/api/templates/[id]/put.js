module.exports = function PutTemplatestemplatesid(req, res) {
  res.send({
    command: 'PUTTemplatestemplatesid',
    resource: 'templates',
    method: 'PUT',
    path: '/templates/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};