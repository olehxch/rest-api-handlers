module.exports = function GetPaymentspaymentsidanalytics(req, res) {
  res.send({
    command: 'GETPaymentspaymentsidanalytics',
    resource: 'payments',
    method: 'GET',
    path: '/payments/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};