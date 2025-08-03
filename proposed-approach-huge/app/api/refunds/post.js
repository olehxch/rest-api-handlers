module.exports = function PostRefundsrefunds(req, res) {
  res.send({
    command: 'POSTRefundsrefunds',
    resource: 'refunds',
    method: 'POST',
    path: '/refunds',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};