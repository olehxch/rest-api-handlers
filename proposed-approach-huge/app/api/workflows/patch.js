module.exports = function PatchWorkflowsworkflows(req, res) {
  res.send({
    command: 'PATCHWorkflowsworkflows',
    resource: 'workflows',
    method: 'PATCH',
    path: '/workflows',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};