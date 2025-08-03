module.exports = function GetBillingbillingid(req, res) {
  res.send({
    command: 'GETBillingbillingid',
    resource: 'billing',
    method: 'GET',
    path: '/billing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};