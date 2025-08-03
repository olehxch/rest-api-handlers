module.exports = function GetMessagesmessagesidhistory(req, res) {
  res.send({
    command: 'GETMessagesmessagesidhistory',
    resource: 'messages',
    method: 'GET',
    path: '/messages/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};