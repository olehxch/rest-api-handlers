module.exports = function GetGroupsgroupsid(req, res) {
  res.send({
    command: 'GETGroupsgroupsid',
    resource: 'groups',
    method: 'GET',
    path: '/groups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};