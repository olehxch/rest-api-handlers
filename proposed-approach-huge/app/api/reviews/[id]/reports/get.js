module.exports = function GetReviewsreviewsidreports(req, res) {
  res.send({
    command: 'GETReviewsreviewsidreports',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};