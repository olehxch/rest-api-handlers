module.exports = function PutPaymentspaymentsid(req, res) {
  res.send({
    command: 'PUTPaymentspaymentsid',
    resource: 'payments',
    method: 'PUT',
    path: '/payments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};