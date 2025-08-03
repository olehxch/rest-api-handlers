module.exports = function PostGroupsgroupsid(req, res) {
  res.send({
    command: 'POSTGroupsgroupsid',
    resource: 'groups',
    method: 'POST',
    path: '/groups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};