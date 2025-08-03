module.exports = function PostReceiptsreceipts(req, res) {
  res.send({
    command: 'POSTReceiptsreceipts',
    resource: 'receipts',
    method: 'POST',
    path: '/receipts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};