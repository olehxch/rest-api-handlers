module.exports = function DeleteRatingsratings(req, res) {
  res.send({
    command: 'DELETERatingsratings',
    resource: 'ratings',
    method: 'DELETE',
    path: '/ratings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};