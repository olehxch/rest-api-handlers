module.exports = function GetMessagesmessagesidreports(req, res) {
  res.send({
    command: 'GETMessagesmessagesidreports',
    resource: 'messages',
    method: 'GET',
    path: '/messages/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};