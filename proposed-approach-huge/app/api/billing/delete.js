module.exports = function DeleteBillingbilling(req, res) {
  res.send({
    command: 'DELETEBillingbilling',
    resource: 'billing',
    method: 'DELETE',
    path: '/billing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};