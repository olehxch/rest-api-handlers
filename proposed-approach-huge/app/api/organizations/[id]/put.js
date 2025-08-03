module.exports = function PutOrganizationsorganizationsid(req, res) {
  res.send({
    command: 'PUTOrganizationsorganizationsid',
    resource: 'organizations',
    method: 'PUT',
    path: '/organizations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};