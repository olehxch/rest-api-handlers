module.exports = function PatchReceiptsreceiptsid(req, res) {
  res.send({
    command: 'PATCHReceiptsreceiptsid',
    resource: 'receipts',
    method: 'PATCH',
    path: '/receipts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};