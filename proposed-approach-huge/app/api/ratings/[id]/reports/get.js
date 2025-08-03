module.exports = function GetRatingsratingsidreports(req, res) {
  res.send({
    command: 'GETRatingsratingsidreports',
    resource: 'ratings',
    method: 'GET',
    path: '/ratings/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};