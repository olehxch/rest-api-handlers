module.exports = function PostPaymentspayments(req, res) {
  res.send({
    command: 'POSTPaymentspayments',
    resource: 'payments',
    method: 'POST',
    path: '/payments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};