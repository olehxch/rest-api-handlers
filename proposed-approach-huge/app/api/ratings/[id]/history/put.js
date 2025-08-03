module.exports = function PutRatingsratingsidhistory(req, res) {
  res.send({
    command: 'PUTRatingsratingsidhistory',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};