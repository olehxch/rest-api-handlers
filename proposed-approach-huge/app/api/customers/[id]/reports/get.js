module.exports = function GetCustomerscustomersidreports(req, res) {
  res.send({
    command: 'GETCustomerscustomersidreports',
    resource: 'customers',
    method: 'GET',
    path: '/customers/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};