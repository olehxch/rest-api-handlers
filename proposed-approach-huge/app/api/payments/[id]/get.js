module.exports = function GetPaymentspaymentsid(req, res) {
  res.send({
    command: 'GETPaymentspaymentsid',
    resource: 'payments',
    method: 'GET',
    path: '/payments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};