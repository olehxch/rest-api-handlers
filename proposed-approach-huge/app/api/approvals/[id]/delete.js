module.exports = function DeleteApprovalsapprovalsid(req, res) {
  res.send({
    command: 'DELETEApprovalsapprovalsid',
    resource: 'approvals',
    method: 'DELETE',
    path: '/approvals/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};