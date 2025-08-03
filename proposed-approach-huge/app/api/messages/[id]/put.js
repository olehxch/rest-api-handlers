module.exports = function PutMessagesmessagesid(req, res) {
  res.send({
    command: 'PUTMessagesmessagesid',
    resource: 'messages',
    method: 'PUT',
    path: '/messages/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};