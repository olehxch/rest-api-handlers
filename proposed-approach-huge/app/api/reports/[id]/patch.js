module.exports = function PatchReportsreportsid(req, res) {
  res.send({
    command: 'PATCHReportsreportsid',
    resource: 'reports',
    method: 'PATCH',
    path: '/reports/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};