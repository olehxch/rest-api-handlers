module.exports = function PostOrganizationsorganizations(req, res) {
  res.send({
    command: 'POSTOrganizationsorganizations',
    resource: 'organizations',
    method: 'POST',
    path: '/organizations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};