module.exports = function PostMessagesmessagesidhistory(req, res) {
  res.send({
    command: 'POSTMessagesmessagesidhistory',
    resource: 'messages',
    method: 'POST',
    path: '/messages/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};