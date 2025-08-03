module.exports = function PatchReviewsreviewsid(req, res) {
  res.send({
    command: 'PATCHReviewsreviewsid',
    resource: 'reviews',
    method: 'PATCH',
    path: '/reviews/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};