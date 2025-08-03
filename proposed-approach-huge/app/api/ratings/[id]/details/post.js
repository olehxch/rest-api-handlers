module.exports = function PostRatingsratingsiddetails(req, res) {
  res.send({
    command: 'POSTRatingsratingsiddetails',
    resource: 'ratings',
    method: 'POST',
    path: '/ratings/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};