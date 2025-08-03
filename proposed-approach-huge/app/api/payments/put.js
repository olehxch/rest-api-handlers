module.exports = function PutPaymentspayments(req, res) {
  res.send({
    command: 'PUTPaymentspayments',
    resource: 'payments',
    method: 'PUT',
    path: '/payments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};