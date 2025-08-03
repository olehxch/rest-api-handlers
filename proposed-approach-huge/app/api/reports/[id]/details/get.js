module.exports = function GetReportsreportsiddetails(req, res) {
  res.send({
    command: 'GETReportsreportsiddetails',
    resource: 'reports',
    method: 'GET',
    path: '/reports/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};