module.exports = function PostCustomerscustomersiddetails(req, res) {
  res.send({
    command: 'POSTCustomerscustomersiddetails',
    resource: 'customers',
    method: 'POST',
    path: '/customers/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};