module.exports = function PatchLeadsleads(req, res) {
  res.send({
    command: 'PATCHLeadsleads',
    resource: 'leads',
    method: 'PATCH',
    path: '/leads',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};