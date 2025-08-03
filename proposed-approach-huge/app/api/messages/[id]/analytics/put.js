module.exports = function PutMessagesmessagesidanalytics(req, res) {
  res.send({
    command: 'PUTMessagesmessagesidanalytics',
    resource: 'messages',
    method: 'PUT',
    path: '/messages/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};