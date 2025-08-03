module.exports = function PatchMarketingmarketingid(req, res) {
  res.send({
    command: 'PATCHMarketingmarketingid',
    resource: 'marketing',
    method: 'PATCH',
    path: '/marketing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};