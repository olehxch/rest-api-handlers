module.exports = function PostRatingsratingsidhistory(req, res) {
  res.send({
    command: 'POSTRatingsratingsidhistory',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};