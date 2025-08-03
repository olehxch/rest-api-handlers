module.exports = function PostRatingsratings(req, res) {
  res.send({
    command: 'POSTRatingsratings',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};