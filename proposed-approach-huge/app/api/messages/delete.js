module.exports = function DeleteMessagesmessages(req, res) {
  res.send({
    command: 'DELETEMessagesmessages',
    resource: 'messages',
    method: 'DELETE',
    path: '/messages',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};