module.exports = function PatchBillingbilling(req, res) {
  res.send({
    command: 'PATCHBillingbilling',
    resource: 'billing',
    method: 'PATCH',
    path: '/billing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};