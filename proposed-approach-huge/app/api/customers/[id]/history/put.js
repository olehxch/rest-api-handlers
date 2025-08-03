module.exports = function PutCustomerscustomersidhistory(req, res) {
  res.send({
    command: 'PUTCustomerscustomersidhistory',
    resource: 'customers',
    method: 'PUT',
    path: '/customers/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};