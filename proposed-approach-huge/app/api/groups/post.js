module.exports = function PostGroupsgroups(req, res) {
  res.send({
    command: 'POSTGroupsgroups',
    resource: 'groups',
    method: 'POST',
    path: '/groups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};