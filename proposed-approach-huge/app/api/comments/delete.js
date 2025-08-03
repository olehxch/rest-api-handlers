module.exports = function DeleteCommentscomments(req, res) {
  res.send({
    command: 'DELETECommentscomments',
    resource: 'comments',
    method: 'DELETE',
    path: '/comments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};