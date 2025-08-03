module.exports = function PutCustomerscustomersidreports(req, res) {
  res.send({
    command: 'PUTCustomerscustomersidreports',
    resource: 'customers',
    method: 'PUT',
    path: '/customers/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};