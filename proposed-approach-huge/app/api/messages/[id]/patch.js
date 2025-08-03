module.exports = function PatchMessagesmessagesid(req, res) {
  res.send({
    command: 'PATCHMessagesmessagesid',
    resource: 'messages',
    method: 'PATCH',
    path: '/messages/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};