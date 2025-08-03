module.exports = function PostTokenstokensid(req, res) {
  res.send({
    command: 'POSTTokenstokensid',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};