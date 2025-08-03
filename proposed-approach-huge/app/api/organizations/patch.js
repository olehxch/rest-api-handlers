module.exports = function PatchOrganizationsorganizations(req, res) {
  res.send({
    command: 'PATCHOrganizationsorganizations',
    resource: 'organizations',
    method: 'PATCH',
    path: '/organizations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};