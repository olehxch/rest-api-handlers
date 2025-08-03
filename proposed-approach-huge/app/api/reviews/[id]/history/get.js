module.exports = function GetReviewsreviewsidhistory(req, res) {
  res.send({
    command: 'GETReviewsreviewsidhistory',
    resource: 'reviews',
    method: 'GET',
    path: '/reviews/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};