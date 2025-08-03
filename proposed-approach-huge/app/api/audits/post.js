module.exports = function PostAuditsaudits(req, res) {
  res.send({
    command: 'POSTAuditsaudits',
    resource: 'audits',
    method: 'POST',
    path: '/audits',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};