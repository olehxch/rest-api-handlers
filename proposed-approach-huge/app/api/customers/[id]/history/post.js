module.exports = function PostCustomerscustomersidhistory(req, res) {
  res.send({
    command: 'POSTCustomerscustomersidhistory',
    resource: 'customers',
    method: 'POST',
    path: '/customers/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};