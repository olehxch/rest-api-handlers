module.exports = function PostCustomerscustomersid(req, res) {
  res.send({
    command: 'POSTCustomerscustomersid',
    resource: 'customers',
    method: 'POST',
    path: '/customers/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};