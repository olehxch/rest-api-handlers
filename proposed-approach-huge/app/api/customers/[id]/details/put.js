module.exports = function PutCustomerscustomersiddetails(req, res) {
  res.send({
    command: 'PUTCustomerscustomersiddetails',
    resource: 'customers',
    method: 'PUT',
    path: '/customers/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};