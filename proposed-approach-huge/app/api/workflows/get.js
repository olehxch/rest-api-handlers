module.exports = function GetWorkflowsworkflows(req, res) {
  res.send({
    command: 'GETWorkflowsworkflows',
    resource: 'workflows',
    method: 'GET',
    path: '/workflows',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};