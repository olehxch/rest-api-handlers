module.exports = function DeleteOrganizationsorganizationsid(req, res) {
  res.send({
    command: 'DELETEOrganizationsorganizationsid',
    resource: 'organizations',
    method: 'DELETE',
    path: '/organizations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};