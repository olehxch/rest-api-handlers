module.exports = function DeleteDashboardsdashboards(req, res) {
  res.send({
    command: 'DELETEDashboardsdashboards',
    resource: 'dashboards',
    method: 'DELETE',
    path: '/dashboards',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};