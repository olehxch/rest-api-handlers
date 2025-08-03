module.exports = function PutBillingbilling(req, res) {
  res.send({
    command: 'PUTBillingbilling',
    resource: 'billing',
    method: 'PUT',
    path: '/billing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};