module.exports = function PutMessagesmessagesidreports(req, res) {
  res.send({
    command: 'PUTMessagesmessagesidreports',
    resource: 'messages',
    method: 'PUT',
    path: '/messages/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};