module.exports = function DeleteRefundsrefunds(req, res) {
  res.send({
    command: 'DELETERefundsrefunds',
    resource: 'refunds',
    method: 'DELETE',
    path: '/refunds',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};