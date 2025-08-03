module.exports = function GetWorkflowsworkflowsid(req, res) {
  res.send({
    command: 'GETWorkflowsworkflowsid',
    resource: 'workflows',
    method: 'GET',
    path: '/workflows/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};