module.exports = function PutWorkflowsworkflowsid(req, res) {
  res.send({
    command: 'PUTWorkflowsworkflowsid',
    resource: 'workflows',
    method: 'PUT',
    path: '/workflows/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};