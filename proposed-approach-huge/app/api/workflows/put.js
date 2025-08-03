module.exports = function PutWorkflowsworkflows(req, res) {
  res.send({
    command: 'PUTWorkflowsworkflows',
    resource: 'workflows',
    method: 'PUT',
    path: '/workflows',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};