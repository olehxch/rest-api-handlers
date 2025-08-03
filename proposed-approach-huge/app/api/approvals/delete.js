module.exports = function DeleteApprovalsapprovals(req, res) {
  res.send({
    command: 'DELETEApprovalsapprovals',
    resource: 'approvals',
    method: 'DELETE',
    path: '/approvals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};