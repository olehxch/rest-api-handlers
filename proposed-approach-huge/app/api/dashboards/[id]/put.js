module.exports = function PutDashboardsdashboardsid(req, res) {
  res.send({
    command: 'PUTDashboardsdashboardsid',
    resource: 'dashboards',
    method: 'PUT',
    path: '/dashboards/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};