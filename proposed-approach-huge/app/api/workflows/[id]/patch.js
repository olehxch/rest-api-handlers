module.exports = function PatchWorkflowsworkflowsid(req, res) {
  res.send({
    command: 'PATCHWorkflowsworkflowsid',
    resource: 'workflows',
    method: 'PATCH',
    path: '/workflows/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};