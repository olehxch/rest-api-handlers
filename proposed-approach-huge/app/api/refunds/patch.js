module.exports = function PatchRefundsrefunds(req, res) {
  res.send({
    command: 'PATCHRefundsrefunds',
    resource: 'refunds',
    method: 'PATCH',
    path: '/refunds',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};