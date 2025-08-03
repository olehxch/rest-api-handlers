module.exports = function DeleteGroupsgroupsid(req, res) {
  res.send({
    command: 'DELETEGroupsgroupsid',
    resource: 'groups',
    method: 'DELETE',
    path: '/groups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};