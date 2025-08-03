module.exports = function DeleteCustomerscustomersid(req, res) {
  res.send({
    command: 'DELETECustomerscustomersid',
    resource: 'customers',
    method: 'DELETE',
    path: '/customers/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};