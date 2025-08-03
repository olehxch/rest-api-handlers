module.exports = function PostRatingsratingsid(req, res) {
  res.send({
    command: 'POSTRatingsratingsid',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};