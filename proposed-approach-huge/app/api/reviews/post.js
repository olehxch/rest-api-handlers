module.exports = function PostReviewsreviews(req, res) {
  res.send({
    command: 'POSTReviewsreviews',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};