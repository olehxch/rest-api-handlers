module.exports = function DeletePaymentspayments(req, res) {
  res.send({
    command: 'DELETEPaymentspayments',
    resource: 'payments',
    method: 'DELETE',
    path: '/payments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};