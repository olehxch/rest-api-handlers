module.exports = function GetCustomerscustomersiddetails(req, res) {
  res.send({
    command: 'GETCustomerscustomersiddetails',
    resource: 'customers',
    method: 'GET',
    path: '/customers/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};