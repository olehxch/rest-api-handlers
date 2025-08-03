module.exports = function GetReceiptsreceiptsid(req, res) {
  res.send({
    command: 'GETReceiptsreceiptsid',
    resource: 'receipts',
    method: 'GET',
    path: '/receipts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};