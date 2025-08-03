module.exports = function PatchBillingbillingid(req, res) {
  res.send({
    command: 'PATCHBillingbillingid',
    resource: 'billing',
    method: 'PATCH',
    path: '/billing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};