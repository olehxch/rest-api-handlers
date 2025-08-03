module.exports = function PutRatingsratings(req, res) {
  res.send({
    command: 'PUTRatingsratings',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};