module.exports = function GetOrganizationsorganizations(req, res) {
  res.send({
    command: 'GETOrganizationsorganizations',
    resource: 'organizations',
    method: 'GET',
    path: '/organizations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};