module.exports = function PostPaymentspaymentsidreports(req, res) {
  res.send({
    command: 'POSTPaymentspaymentsidreports',
    resource: 'payments',
    method: 'POST',
    path: '/payments/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};