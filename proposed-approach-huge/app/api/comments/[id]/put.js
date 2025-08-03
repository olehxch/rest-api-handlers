module.exports = function PutCommentscommentsid(req, res) {
  res.send({
    command: 'PUTCommentscommentsid',
    resource: 'comments',
    method: 'PUT',
    path: '/comments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};