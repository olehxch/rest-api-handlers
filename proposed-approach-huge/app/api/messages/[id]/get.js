module.exports = function GetMessagesmessagesid(req, res) {
  res.send({
    command: 'GETMessagesmessagesid',
    resource: 'messages',
    method: 'GET',
    path: '/messages/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};