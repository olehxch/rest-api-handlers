module.exports = function DeleteWorkflowsworkflowsid(req, res) {
  res.send({
    command: 'DELETEWorkflowsworkflowsid',
    resource: 'workflows',
    method: 'DELETE',
    path: '/workflows/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};