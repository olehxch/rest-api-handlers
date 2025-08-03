module.exports = function GetReviewsreviewsid(req, res) {
  res.send({
    command: 'GETReviewsreviewsid',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};