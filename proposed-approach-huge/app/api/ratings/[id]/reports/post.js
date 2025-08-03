module.exports = function PostRatingsratingsidreports(req, res) {
  res.send({
    command: 'POSTRatingsratingsidreports',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};