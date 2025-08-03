module.exports = function GetCustomerscustomersidhistory(req, res) {
  res.send({
    command: 'GETCustomerscustomersidhistory',
    resource: 'customers',
    method: 'GET',
    path: '/customers/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};