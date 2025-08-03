module.exports = function GetMessagesmessagesidanalytics(req, res) {
  res.send({
    command: 'GETMessagesmessagesidanalytics',
    resource: 'messages',
    method: 'GET',
    path: '/messages/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};