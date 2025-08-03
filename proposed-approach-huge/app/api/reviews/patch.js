module.exports = function PatchReviewsreviews(req, res) {
  res.send({
    command: 'PATCHReviewsreviews',
    resource: 'reviews',
    method: 'PATCH',
    path: '/reviews',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};