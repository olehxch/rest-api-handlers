module.exports = function GetGroupsgroups(req, res) {
  res.send({
    command: 'GETGroupsgroups',
    resource: 'groups',
    method: 'GET',
    path: '/groups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};