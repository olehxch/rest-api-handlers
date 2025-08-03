module.exports = function PostCustomerscustomers(req, res) {
  res.send({
    command: 'POSTCustomerscustomers',
    resource: 'customers',
    method: 'POST',
    path: '/customers',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};