module.exports = function GetPaymentspaymentsidreports(req, res) {
  res.send({
    command: 'GETPaymentspaymentsidreports',
    resource: 'payments',
    method: 'GET',
    path: '/payments/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};