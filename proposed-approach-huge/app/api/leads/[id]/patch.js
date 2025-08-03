module.exports = function PatchLeadsleadsid(req, res) {
  res.send({
    command: 'PATCHLeadsleadsid',
    resource: 'leads',
    method: 'PATCH',
    path: '/leads/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};