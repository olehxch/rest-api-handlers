module.exports = function DeleteReviewsreviewsid(req, res) {
  res.send({
    command: 'DELETEReviewsreviewsid',
    resource: 'reviews',
    method: 'DELETE',
    path: '/reviews/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};