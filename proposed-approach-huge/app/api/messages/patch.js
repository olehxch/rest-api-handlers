module.exports = function PatchMessagesmessages(req, res) {
  res.send({
    command: 'PATCHMessagesmessages',
    resource: 'messages',
    method: 'PATCH',
    path: '/messages',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};