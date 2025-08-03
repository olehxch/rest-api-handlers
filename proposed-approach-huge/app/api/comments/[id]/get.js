module.exports = function GetCommentscommentsid(req, res) {
  res.send({
    command: 'GETCommentscommentsid',
    resource: 'comments',
    method: 'GET',
    path: '/comments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};