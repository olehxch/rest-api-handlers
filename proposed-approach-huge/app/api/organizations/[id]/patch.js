module.exports = function PatchOrganizationsorganizationsid(req, res) {
  res.send({
    command: 'PATCHOrganizationsorganizationsid',
    resource: 'organizations',
    method: 'PATCH',
    path: '/organizations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};