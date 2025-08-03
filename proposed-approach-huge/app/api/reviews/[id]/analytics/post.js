module.exports = function PostReviewsreviewsidanalytics(req, res) {
  res.send({
    command: 'POSTReviewsreviewsidanalytics',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};