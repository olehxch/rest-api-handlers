module.exports = function PutPaymentspaymentsidanalytics(req, res) {
  res.send({
    command: 'PUTPaymentspaymentsidanalytics',
    resource: 'payments',
    method: 'PUT',
    path: '/payments/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};