module.exports = function GetMessagesmessagesiddetails(req, res) {
  res.send({
    command: 'GETMessagesmessagesiddetails',
    resource: 'messages',
    method: 'GET',
    path: '/messages/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};