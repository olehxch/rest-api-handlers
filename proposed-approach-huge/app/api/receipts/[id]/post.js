module.exports = function PostReceiptsreceiptsid(req, res) {
  res.send({
    command: 'POSTReceiptsreceiptsid',
    resource: 'receipts',
    method: 'POST',
    path: '/receipts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};