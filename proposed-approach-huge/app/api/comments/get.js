module.exports = function GetCommentscomments(req, res) {
  res.send({
    command: 'GETCommentscomments',
    resource: 'comments',
    method: 'GET',
    path: '/comments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};