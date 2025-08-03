module.exports = function PatchGroupsgroupsid(req, res) {
  res.send({
    command: 'PATCHGroupsgroupsid',
    resource: 'groups',
    method: 'PATCH',
    path: '/groups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};