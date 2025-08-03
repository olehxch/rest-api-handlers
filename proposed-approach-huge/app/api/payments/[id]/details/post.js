module.exports = function PostPaymentspaymentsiddetails(req, res) {
  res.send({
    command: 'POSTPaymentspaymentsiddetails',
    resource: 'payments',
    method: 'POST',
    path: '/payments/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};