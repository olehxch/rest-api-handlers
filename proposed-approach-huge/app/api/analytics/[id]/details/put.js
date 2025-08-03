module.exports = function PutAnalyticsanalyticsiddetails(req, res) {
  res.send({
    command: 'PUTAnalyticsanalyticsiddetails',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};