module.exports = function PutReceiptsreceipts(req, res) {
  res.send({
    command: 'PUTReceiptsreceipts',
    resource: 'receipts',
    method: 'PUT',
    path: '/receipts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};