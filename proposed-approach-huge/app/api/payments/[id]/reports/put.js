module.exports = function PutPaymentspaymentsidreports(req, res) {
  res.send({
    command: 'PUTPaymentspaymentsidreports',
    resource: 'payments',
    method: 'PUT',
    path: '/payments/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};