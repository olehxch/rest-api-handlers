module.exports = function DeleteRatingsratingsid(req, res) {
  res.send({
    command: 'DELETERatingsratingsid',
    resource: 'ratings',
    method: 'DELETE',
    path: '/ratings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};