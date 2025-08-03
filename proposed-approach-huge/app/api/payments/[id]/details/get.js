module.exports = function GetPaymentspaymentsiddetails(req, res) {
  res.send({
    command: 'GETPaymentspaymentsiddetails',
    resource: 'payments',
    method: 'GET',
    path: '/payments/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};