module.exports = function PutReviewsreviewsidanalytics(req, res) {
  res.send({
    command: 'PUTReviewsreviewsidanalytics',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};