module.exports = function PostReviewsreviewsid(req, res) {
  res.send({
    command: 'POSTReviewsreviewsid',
    resource: 'reviews',
    method: 'POST',
    path: '/reviews/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};