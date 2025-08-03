module.exports = function GetMessagesmessages(req, res) {
  res.send({
    command: 'GETMessagesmessages',
    resource: 'messages',
    method: 'GET',
    path: '/messages',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};