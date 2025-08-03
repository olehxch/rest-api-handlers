module.exports = function PutMarketingmarketingid(req, res) {
  res.send({
    command: 'PUTMarketingmarketingid',
    resource: 'marketing',
    method: 'PUT',
    path: '/marketing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};