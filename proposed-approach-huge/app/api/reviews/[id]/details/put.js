module.exports = function PutReviewsreviewsiddetails(req, res) {
  res.send({
    command: 'PUTReviewsreviewsiddetails',
    resource: 'reviews',
    method: 'PUT',
    path: '/reviews/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};