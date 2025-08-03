module.exports = function PutTemplatestemplates(req, res) {
  res.send({
    command: 'PUTTemplatestemplates',
    resource: 'templates',
    method: 'PUT',
    path: '/templates',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};