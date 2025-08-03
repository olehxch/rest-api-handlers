module.exports = function PostCommentscommentsid(req, res) {
  res.send({
    command: 'POSTCommentscommentsid',
    resource: 'comments',
    method: 'POST',
    path: '/comments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};