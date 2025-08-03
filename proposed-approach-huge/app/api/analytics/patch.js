module.exports = function PatchAnalyticsanalytics(req, res) {
  res.send({
    command: 'PATCHAnalyticsanalytics',
    resource: 'analytics',
    method: 'PATCH',
    path: '/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};