module.exports = function PutCustomerscustomersid(req, res) {
  res.send({
    command: 'PUTCustomerscustomersid',
    resource: 'customers',
    method: 'PUT',
    path: '/customers/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};