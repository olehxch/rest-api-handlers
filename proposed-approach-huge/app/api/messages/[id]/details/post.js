module.exports = function PostMessagesmessagesiddetails(req, res) {
  res.send({
    command: 'POSTMessagesmessagesiddetails',
    resource: 'messages',
    method: 'POST',
    path: '/messages/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};