module.exports = function DeleteRefundsrefundsid(req, res) {
  res.send({
    command: 'DELETERefundsrefundsid',
    resource: 'refunds',
    method: 'DELETE',
    path: '/refunds/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};