module.exports = function PatchCommentscommentsid(req, res) {
  res.send({
    command: 'PATCHCommentscommentsid',
    resource: 'comments',
    method: 'PATCH',
    path: '/comments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};