module.exports = function PutBillingbillingid(req, res) {
  res.send({
    command: 'PUTBillingbillingid',
    resource: 'billing',
    method: 'PUT',
    path: '/billing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};