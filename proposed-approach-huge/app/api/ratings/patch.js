module.exports = function PatchRatingsratings(req, res) {
  res.send({
    command: 'PATCHRatingsratings',
    resource: 'ratings',
    method: 'PATCH',
    path: '/ratings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};