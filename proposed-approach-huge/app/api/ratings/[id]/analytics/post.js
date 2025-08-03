module.exports = function PostRatingsratingsidanalytics(req, res) {
  res.send({
    command: 'POSTRatingsratingsidanalytics',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};