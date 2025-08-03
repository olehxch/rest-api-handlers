module.exports = function PostTokenstokensidanalytics(req, res) {
  res.send({
    command: 'POSTTokenstokensidanalytics',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};