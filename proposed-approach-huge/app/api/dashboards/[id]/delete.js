module.exports = function DeleteDashboardsdashboardsid(req, res) {
  res.send({
    command: 'DELETEDashboardsdashboardsid',
    resource: 'dashboards',
    method: 'DELETE',
    path: '/dashboards/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};