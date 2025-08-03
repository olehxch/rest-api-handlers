module.exports = function PostMessagesmessagesidanalytics(req, res) {
  res.send({
    command: 'POSTMessagesmessagesidanalytics',
    resource: 'messages',
    method: 'POST',
    path: '/messages/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};