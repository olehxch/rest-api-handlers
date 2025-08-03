module.exports = function GetPaymentspayments(req, res) {
  res.send({
    command: 'GETPaymentspayments',
    resource: 'payments',
    method: 'GET',
    path: '/payments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};