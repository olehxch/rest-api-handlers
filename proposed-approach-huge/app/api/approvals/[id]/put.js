module.exports = function PutApprovalsapprovalsid(req, res) {
  res.send({
    command: 'PUTApprovalsapprovalsid',
    resource: 'approvals',
    method: 'PUT',
    path: '/approvals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};