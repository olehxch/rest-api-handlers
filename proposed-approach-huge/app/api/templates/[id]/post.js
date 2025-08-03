module.exports = function PostTemplatestemplatesid(req, res) {
  res.send({
    command: 'POSTTemplatestemplatesid',
    resource: 'templates',
    method: 'POST',
    path: '/templates/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};