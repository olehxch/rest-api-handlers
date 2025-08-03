module.exports = function PatchGroupsgroups(req, res) {
  res.send({
    command: 'PATCHGroupsgroups',
    resource: 'groups',
    method: 'PATCH',
    path: '/groups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};