module.exports = function PostTokenstokens(req, res) {
  res.send({
    command: 'POSTTokenstokens',
    resource: 'tokens',
    method: 'POST',
    path: '/tokens',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};