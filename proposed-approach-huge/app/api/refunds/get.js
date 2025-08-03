module.exports = function GetRefundsrefunds(req, res) {
  res.send({
    command: 'GETRefundsrefunds',
    resource: 'refunds',
    method: 'GET',
    path: '/refunds',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};