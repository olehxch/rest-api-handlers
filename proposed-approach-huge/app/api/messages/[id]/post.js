module.exports = function PostMessagesmessagesid(req, res) {
  res.send({
    command: 'POSTMessagesmessagesid',
    resource: 'messages',
    method: 'POST',
    path: '/messages/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};