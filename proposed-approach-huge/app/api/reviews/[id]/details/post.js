module.exports = function PostReviewsreviewsiddetails(req, res) {
  res.send({
    command: 'POSTReviewsreviewsiddetails',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};