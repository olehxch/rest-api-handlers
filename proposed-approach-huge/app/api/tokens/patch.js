module.exports = function PatchTokenstokens(req, res) {
  res.send({
    command: 'PATCHTokenstokens',
    resource: 'tokens',
    method: 'PATCH',
    path: '/tokens',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};