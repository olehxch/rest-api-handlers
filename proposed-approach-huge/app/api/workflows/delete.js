module.exports = function DeleteWorkflowsworkflows(req, res) {
  res.send({
    command: 'DELETEWorkflowsworkflows',
    resource: 'workflows',
    method: 'DELETE',
    path: '/workflows',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};