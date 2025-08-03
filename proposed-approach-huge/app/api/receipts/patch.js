module.exports = function PatchReceiptsreceipts(req, res) {
  res.send({
    command: 'PATCHReceiptsreceipts',
    resource: 'receipts',
    method: 'PATCH',
    path: '/receipts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};