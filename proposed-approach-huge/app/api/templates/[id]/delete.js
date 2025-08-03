module.exports = function DeleteTemplatestemplatesid(req, res) {
  res.send({
    command: 'DELETETemplatestemplatesid',
    resource: 'templates',
    method: 'DELETE',
    path: '/templates/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};