module.exports = function GetReceiptsreceipts(req, res) {
  res.send({
    command: 'GETReceiptsreceipts',
    resource: 'receipts',
    method: 'GET',
    path: '/receipts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};