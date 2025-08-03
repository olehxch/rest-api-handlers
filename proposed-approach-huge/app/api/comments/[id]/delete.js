module.exports = function DeleteCommentscommentsid(req, res) {
  res.send({
    command: 'DELETECommentscommentsid',
    resource: 'comments',
    method: 'DELETE',
    path: '/comments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};