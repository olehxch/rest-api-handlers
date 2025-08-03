module.exports = function PutReviewsreviewsidreports(req, res) {
  res.send({
    command: 'PUTReviewsreviewsidreports',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};