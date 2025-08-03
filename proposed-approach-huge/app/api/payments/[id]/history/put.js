module.exports = function PutPaymentspaymentsidhistory(req, res) {
  res.send({
    command: 'PUTPaymentspaymentsidhistory',
    resource: 'payments',
    method: 'PUT',
    path: '/payments/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};