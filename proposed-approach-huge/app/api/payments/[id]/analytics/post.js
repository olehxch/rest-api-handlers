module.exports = function PostPaymentspaymentsidanalytics(req, res) {
  res.send({
    command: 'POSTPaymentspaymentsidanalytics',
    resource: 'payments',
    method: 'POST',
    path: '/payments/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};