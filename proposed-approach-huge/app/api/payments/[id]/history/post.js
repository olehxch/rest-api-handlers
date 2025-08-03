module.exports = function PostPaymentspaymentsidhistory(req, res) {
  res.send({
    command: 'POSTPaymentspaymentsidhistory',
    resource: 'payments',
    method: 'POST',
    path: '/payments/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};