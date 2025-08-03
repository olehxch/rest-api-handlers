module.exports = function PostReviewsreviewsidhistory(req, res) {
  res.send({
    command: 'POSTReviewsreviewsidhistory',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};