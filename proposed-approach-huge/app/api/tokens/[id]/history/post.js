module.exports = function PostTokenstokensidhistory(req, res) {
  res.send({
    command: 'POSTTokenstokensidhistory',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};