module.exports = function PutReceiptsreceiptsid(req, res) {
  res.send({
    command: 'PUTReceiptsreceiptsid',
    resource: 'receipts',
    method: 'PUT',
    path: '/receipts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};