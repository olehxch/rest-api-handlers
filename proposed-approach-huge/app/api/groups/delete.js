module.exports = function DeleteGroupsgroups(req, res) {
  res.send({
    command: 'DELETEGroupsgroups',
    resource: 'groups',
    method: 'DELETE',
    path: '/groups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};