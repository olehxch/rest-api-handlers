module.exports = function DeletePaymentspaymentsid(req, res) {
  res.send({
    command: 'DELETEPaymentspaymentsid',
    resource: 'payments',
    method: 'DELETE',
    path: '/payments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};