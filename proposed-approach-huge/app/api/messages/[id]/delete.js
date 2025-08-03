module.exports = function DeleteMessagesmessagesid(req, res) {
  res.send({
    command: 'DELETEMessagesmessagesid',
    resource: 'messages',
    method: 'DELETE',
    path: '/messages/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};