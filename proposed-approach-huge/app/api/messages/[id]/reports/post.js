module.exports = function PostMessagesmessagesidreports(req, res) {
  res.send({
    command: 'POSTMessagesmessagesidreports',
    resource: 'messages',
    method: 'POST',
    path: '/messages/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};