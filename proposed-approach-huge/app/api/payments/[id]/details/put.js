module.exports = function PutPaymentspaymentsiddetails(req, res) {
  res.send({
    command: 'PUTPaymentspaymentsiddetails',
    resource: 'payments',
    method: 'PUT',
    path: '/payments/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};