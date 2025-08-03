module.exports = function PatchDashboardsdashboardsid(req, res) {
  res.send({
    command: 'PATCHDashboardsdashboardsid',
    resource: 'dashboards',
    method: 'PATCH',
    path: '/dashboards/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};