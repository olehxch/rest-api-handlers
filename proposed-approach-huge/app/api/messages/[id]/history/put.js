module.exports = function PutMessagesmessagesidhistory(req, res) {
  res.send({
    command: 'PUTMessagesmessagesidhistory',
    resource: 'messages',
    method: 'PUT',
    path: '/messages/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};