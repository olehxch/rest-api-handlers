module.exports = function PutRefundsrefundsid(req, res) {
  res.send({
    command: 'PUTRefundsrefundsid',
    resource: 'refunds',
    method: 'PUT',
    path: '/refunds/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};