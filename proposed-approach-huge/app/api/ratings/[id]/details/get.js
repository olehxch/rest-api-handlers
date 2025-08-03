module.exports = function GetRatingsratingsiddetails(req, res) {
  res.send({
    command: 'GETRatingsratingsiddetails',
    resource: 'ratings',
    method: 'GET',
    path: '/ratings/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};