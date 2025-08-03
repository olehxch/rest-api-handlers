module.exports = function DeleteTemplatestemplates(req, res) {
  res.send({
    command: 'DELETETemplatestemplates',
    resource: 'templates',
    method: 'DELETE',
    path: '/templates',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};