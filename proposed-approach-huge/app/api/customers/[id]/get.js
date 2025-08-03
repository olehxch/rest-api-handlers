module.exports = function GetCustomerscustomersid(req, res) {
  res.send({
    command: 'GETCustomerscustomersid',
    resource: 'customers',
    method: 'GET',
    path: '/customers/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};