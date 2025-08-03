module.exports = function PostAuditsauditsid(req, res) {
  res.send({
    command: 'POSTAuditsauditsid',
    resource: 'audits',
    method: 'POST',
    path: '/audits/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};