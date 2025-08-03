module.exports = function PostCustomerscustomersidreports(req, res) {
  res.send({
    command: 'POSTCustomerscustomersidreports',
    resource: 'customers',
    method: 'POST',
    path: '/customers/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};