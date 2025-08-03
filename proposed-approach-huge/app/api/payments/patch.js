module.exports = function PatchPaymentspayments(req, res) {
  res.send({
    command: 'PATCHPaymentspayments',
    resource: 'payments',
    method: 'PATCH',
    path: '/payments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};