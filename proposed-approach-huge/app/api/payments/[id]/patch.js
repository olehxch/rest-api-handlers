module.exports = function PatchPaymentspaymentsid(req, res) {
  res.send({
    command: 'PATCHPaymentspaymentsid',
    resource: 'payments',
    method: 'PATCH',
    path: '/payments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};