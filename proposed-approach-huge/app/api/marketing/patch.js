module.exports = function PatchMarketingmarketing(req, res) {
  res.send({
    command: 'PATCHMarketingmarketing',
    resource: 'marketing',
    method: 'PATCH',
    path: '/marketing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};