module.exports = function GetBillingbilling(req, res) {
  res.send({
    command: 'GETBillingbilling',
    resource: 'billing',
    method: 'GET',
    path: '/billing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};