module.exports = function PutOrganizationsorganizations(req, res) {
  res.send({
    command: 'PUTOrganizationsorganizations',
    resource: 'organizations',
    method: 'PUT',
    path: '/organizations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};