module.exports = function DeleteTokenstokens(req, res) {
  res.send({
    command: 'DELETETokenstokens',
    resource: 'tokens',
    method: 'DELETE',
    path: '/tokens',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};