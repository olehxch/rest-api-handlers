module.exports = function PostTokenstokensidreports(req, res) {
  res.send({
    command: 'POSTTokenstokensidreports',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};