module.exports = function PutRefundsrefunds(req, res) {
  res.send({
    command: 'PUTRefundsrefunds',
    resource: 'refunds',
    method: 'PUT',
    path: '/refunds',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};