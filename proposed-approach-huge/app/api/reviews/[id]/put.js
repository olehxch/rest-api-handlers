module.exports = function PutReviewsreviewsid(req, res) {
  res.send({
    command: 'PUTReviewsreviewsid',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};