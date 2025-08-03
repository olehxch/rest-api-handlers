module.exports = function PutGroupsgroupsid(req, res) {
  res.send({
    command: 'PUTGroupsgroupsid',
    resource: 'groups',
    method: 'PUT',
    path: '/groups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};