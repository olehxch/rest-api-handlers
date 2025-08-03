module.exports = function PutAuditsaudits(req, res) {
  res.send({
    command: 'PUTAuditsaudits',
    resource: 'audits',
    method: 'PUT',
    path: '/audits',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};