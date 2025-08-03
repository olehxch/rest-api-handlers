module.exports = function PostAnalyticsanalyticsiddetails(req, res) {
  res.send({
    command: 'POSTAnalyticsanalyticsiddetails',
    resource: 'analytics',
    method: 'POST',
    path: '/analytics/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};