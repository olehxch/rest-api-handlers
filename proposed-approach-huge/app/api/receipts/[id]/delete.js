module.exports = function DeleteReceiptsreceiptsid(req, res) {
  res.send({
    command: 'DELETEReceiptsreceiptsid',
    resource: 'receipts',
    method: 'DELETE',
    path: '/receipts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};