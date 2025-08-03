module.exports = function PutMessagesmessagesiddetails(req, res) {
  res.send({
    command: 'PUTMessagesmessagesiddetails',
    resource: 'messages',
    method: 'PUT',
    path: '/messages/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};