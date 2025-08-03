module.exports = function GetReviewsreviews(req, res) {
  res.send({
    command: 'GETReviewsreviews',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};