module.exports = function PutReviewsreviews(req, res) {
  res.send({
    command: 'PUTReviewsreviews',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};