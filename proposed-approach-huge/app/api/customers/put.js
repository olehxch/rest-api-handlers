module.exports = function PutCustomerscustomers(req, res) {
  res.send({
    command: 'PUTCustomerscustomers',
    resource: 'customers',
    method: 'PUT',
    path: '/customers',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};