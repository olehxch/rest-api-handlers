module.exports = function GetCustomerscustomers(req, res) {
  res.send({
    command: 'GETCustomerscustomers',
    resource: 'customers',
    method: 'GET',
    path: '/customers',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};