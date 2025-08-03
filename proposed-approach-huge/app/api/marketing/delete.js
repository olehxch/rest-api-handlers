module.exports = function DeleteMarketingmarketing(req, res) {
  res.send({
    command: 'DELETEMarketingmarketing',
    resource: 'marketing',
    method: 'DELETE',
    path: '/marketing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};