module.exports = function GetApprovalsapprovals(req, res) {
  res.send({
    command: 'GETApprovalsapprovals',
    resource: 'approvals',
    method: 'GET',
    path: '/approvals',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};