module.exports = function DeleteAuditsaudits(req, res) {
  res.send({
    command: 'DELETEAuditsaudits',
    resource: 'audits',
    method: 'DELETE',
    path: '/audits',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};