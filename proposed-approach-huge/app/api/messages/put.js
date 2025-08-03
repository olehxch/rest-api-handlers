module.exports = function PutMessagesmessages(req, res) {
  res.send({
    command: 'PUTMessagesmessages',
    resource: 'messages',
    method: 'PUT',
    path: '/messages',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};