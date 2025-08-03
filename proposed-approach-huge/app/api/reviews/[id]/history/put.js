module.exports = function PutReviewsreviewsidhistory(req, res) {
  res.send({
    command: 'PUTReviewsreviewsidhistory',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};