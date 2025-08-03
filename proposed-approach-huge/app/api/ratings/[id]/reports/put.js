module.exports = function PutRatingsratingsidreports(req, res) {
  res.send({
    command: 'PUTRatingsratingsidreports',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};