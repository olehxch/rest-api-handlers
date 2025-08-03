module.exports = function PutDashboardsdashboards(req, res) {
  res.send({
    command: 'PUTDashboardsdashboards',
    resource: 'dashboards',
    method: 'PUT',
    path: '/dashboards',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};