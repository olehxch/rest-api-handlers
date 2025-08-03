module.exports = function PatchCommentscomments(req, res) {
  res.send({
    command: 'PATCHCommentscomments',
    resource: 'comments',
    method: 'PATCH',
    path: '/comments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};