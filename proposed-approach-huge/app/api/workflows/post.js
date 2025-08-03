module.exports = function PostWorkflowsworkflows(req, res) {
  res.send({
    command: 'POSTWorkflowsworkflows',
    resource: 'workflows',
    method: 'POST',
    path: '/workflows',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};