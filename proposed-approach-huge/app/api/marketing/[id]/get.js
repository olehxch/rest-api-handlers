module.exports = function GetMarketingmarketingid(req, res) {
  res.send({
    command: 'GETMarketingmarketingid',
    resource: 'marketing',
    method: 'GET',
    path: '/marketing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};