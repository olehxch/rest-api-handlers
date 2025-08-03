module.exports = function DeleteBillingbillingid(req, res) {
  res.send({
    command: 'DELETEBillingbillingid',
    resource: 'billing',
    method: 'DELETE',
    path: '/billing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};