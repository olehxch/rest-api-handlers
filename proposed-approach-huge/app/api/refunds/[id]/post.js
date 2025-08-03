module.exports = function PostRefundsrefundsid(req, res) {
  res.send({
    command: 'POSTRefundsrefundsid',
    resource: 'refunds',
    method: 'POST',
    path: '/refunds/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};