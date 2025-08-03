module.exports = function DeleteMarketingmarketingid(req, res) {
  res.send({
    command: 'DELETEMarketingmarketingid',
    resource: 'marketing',
    method: 'DELETE',
    path: '/marketing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};