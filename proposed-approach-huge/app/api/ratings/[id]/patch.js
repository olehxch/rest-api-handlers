module.exports = function PatchRatingsratingsid(req, res) {
  res.send({
    command: 'PATCHRatingsratingsid',
    resource: 'ratings',
    method: 'PATCH',
    path: '/ratings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};