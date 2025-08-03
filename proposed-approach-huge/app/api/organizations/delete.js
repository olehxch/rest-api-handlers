module.exports = function DeleteOrganizationsorganizations(req, res) {
  res.send({
    command: 'DELETEOrganizationsorganizations',
    resource: 'organizations',
    method: 'DELETE',
    path: '/organizations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};