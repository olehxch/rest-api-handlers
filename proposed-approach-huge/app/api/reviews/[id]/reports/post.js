module.exports = function PostReviewsreviewsidreports(req, res) {
  res.send({
    command: 'POSTReviewsreviewsidreports',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};