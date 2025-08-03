module.exports = function PutRatingsratingsidanalytics(req, res) {
  res.send({
    command: 'PUTRatingsratingsidanalytics',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};