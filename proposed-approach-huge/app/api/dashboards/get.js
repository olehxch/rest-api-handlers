module.exports = function GetDashboardsdashboards(req, res) {
  res.send({
    command: 'GETDashboardsdashboards',
    resource: 'dashboards',
    method: 'GET',
    path: '/dashboards',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};