module.exports = function DeleteCustomerscustomers(req, res) {
  res.send({
    command: 'DELETECustomerscustomers',
    resource: 'customers',
    method: 'DELETE',
    path: '/customers',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};