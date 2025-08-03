module.exports = function PutRatingsratingsiddetails(req, res) {
  res.send({
    command: 'PUTRatingsratingsiddetails',
    resource: 'ratings',
    method: 'PUT',
    path: '/ratings/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};