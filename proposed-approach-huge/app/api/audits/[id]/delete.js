module.exports = function DeleteAuditsauditsid(req, res) {
  res.send({
    command: 'DELETEAuditsauditsid',
    resource: 'audits',
    method: 'DELETE',
    path: '/audits/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};