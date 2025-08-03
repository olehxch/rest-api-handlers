module.exports = function PatchCustomerscustomers(req, res) {
  res.send({
    command: 'PATCHCustomerscustomers',
    resource: 'customers',
    method: 'PATCH',
    path: '/customers',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};