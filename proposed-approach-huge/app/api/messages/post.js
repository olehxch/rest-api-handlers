module.exports = function PostMessagesmessages(req, res) {
  res.send({
    command: 'POSTMessagesmessages',
    resource: 'messages',
    method: 'POST',
    path: '/messages',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};