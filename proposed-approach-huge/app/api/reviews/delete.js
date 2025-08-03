module.exports = function DeleteReviewsreviews(req, res) {
  res.send({
    command: 'DELETEReviewsreviews',
    resource: 'reviews',
    method: 'DELETE',
    path: '/reviews',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};