module.exports = function GetReviewsreviewsiddetails(req, res) {
  res.send({
    command: 'GETReviewsreviewsiddetails',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};