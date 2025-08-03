module.exports = function PostTemplatestemplates(req, res) {
  res.send({
    command: 'POSTTemplatestemplates',
    resource: 'templates',
    method: 'POST',
    path: '/templates',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};