module.exports = function PostTokenstokensiddetails(req, res) {
  res.send({
    command: 'POSTTokenstokensiddetails',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};