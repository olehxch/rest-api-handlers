module.exports = function GetPaymentspaymentsidhistory(req, res) {
  res.send({
    command: 'GETPaymentspaymentsidhistory',
    resource: 'payments',
    method: 'GET',
    path: '/payments/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};