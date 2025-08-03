module.exports = function GetTemplatestemplatesid(req, res) {
  res.send({
    command: 'GETTemplatestemplatesid',
    resource: 'templates',
    method: 'GET',
    path: '/templates/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};