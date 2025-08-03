module.exports = function DeleteTokenstokensid(req, res) {
  res.send({
    command: 'DELETETokenstokensid',
    resource: 'tokens',
    method: 'DELETE',
    path: '/tokens/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};