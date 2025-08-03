module.exports = function PostCommentscomments(req, res) {
  res.send({
    command: 'POSTCommentscomments',
    resource: 'comments',
    method: 'POST',
    path: '/comments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};