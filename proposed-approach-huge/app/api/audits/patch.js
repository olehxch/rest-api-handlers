module.exports = function PatchAuditsaudits(req, res) {
  res.send({
    command: 'PATCHAuditsaudits',
    resource: 'audits',
    method: 'PATCH',
    path: '/audits',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};