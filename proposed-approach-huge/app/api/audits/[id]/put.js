module.exports = function PutAuditsauditsid(req, res) {
  res.send({
    command: 'PUTAuditsauditsid',
    resource: 'audits',
    method: 'PUT',
    path: '/audits/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};