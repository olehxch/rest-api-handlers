module.exports = function PostOrganizationsorganizationsid(req, res) {
  res.send({
    command: 'POSTOrganizationsorganizationsid',
    resource: 'organizations',
    method: 'POST',
    path: '/organizations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};