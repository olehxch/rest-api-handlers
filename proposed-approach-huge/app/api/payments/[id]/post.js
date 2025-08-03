module.exports = function PostPaymentspaymentsid(req, res) {
  res.send({
    command: 'POSTPaymentspaymentsid',
    resource: 'payments',
    method: 'POST',
    path: '/payments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};