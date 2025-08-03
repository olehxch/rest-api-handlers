module.exports = function PostWorkflowsworkflowsid(req, res) {
  res.send({
    command: 'POSTWorkflowsworkflowsid',
    resource: 'workflows',
    method: 'POST',
    path: '/workflows/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};