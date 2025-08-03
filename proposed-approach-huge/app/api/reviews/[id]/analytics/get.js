module.exports = function GetReviewsreviewsidanalytics(req, res) {
  res.send({
    command: 'GETReviewsreviewsidanalytics',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};