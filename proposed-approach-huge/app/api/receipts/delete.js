module.exports = function DeleteReceiptsreceipts(req, res) {
  res.send({
    command: 'DELETEReceiptsreceipts',
    resource: 'receipts',
    method: 'DELETE',
    path: '/receipts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};