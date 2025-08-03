module.exports = function PatchCustomerscustomersid(req, res) {
  res.send({
    command: 'PATCHCustomerscustomersid',
    resource: 'customers',
    method: 'PATCH',
    path: '/customers/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};