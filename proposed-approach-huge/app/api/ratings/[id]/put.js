module.exports = function PutRatingsratingsid(req, res) {
  res.send({
    command: 'PUTRatingsratingsid',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};