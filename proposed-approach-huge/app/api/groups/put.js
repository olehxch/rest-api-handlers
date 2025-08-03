module.exports = function PutGroupsgroups(req, res) {
  res.send({
    command: 'PUTGroupsgroups',
    resource: 'groups',
    method: 'PUT',
    path: '/groups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};