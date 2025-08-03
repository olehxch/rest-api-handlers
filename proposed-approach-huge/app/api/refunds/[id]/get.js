module.exports = function GetRefundsrefundsid(req, res) {
  res.send({
    command: 'GETRefundsrefundsid',
    resource: 'refunds',
    method: 'GET',
    path: '/refunds/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};