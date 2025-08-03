module.exports = function GetTemplatestemplates(req, res) {
  res.send({
    command: 'GETTemplatestemplates',
    resource: 'templates',
    method: 'GET',
    path: '/templates',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};