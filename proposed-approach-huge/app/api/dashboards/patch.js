module.exports = function PatchDashboardsdashboards(req, res) {
  res.send({
    command: 'PATCHDashboardsdashboards',
    resource: 'dashboards',
    method: 'PATCH',
    path: '/dashboards',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};