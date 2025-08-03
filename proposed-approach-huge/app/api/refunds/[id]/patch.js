module.exports = function PatchRefundsrefundsid(req, res) {
  res.send({
    command: 'PATCHRefundsrefundsid',
    resource: 'refunds',
    method: 'PATCH',
    path: '/refunds/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};