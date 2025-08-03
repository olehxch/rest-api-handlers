module.exports = function PutCommentscomments(req, res) {
  res.send({
    command: 'PUTCommentscomments',
    resource: 'comments',
    method: 'PUT',
    path: '/comments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};