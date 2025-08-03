module.exports = function GetRatingsratingsidhistory(req, res) {
  res.send({
    command: 'GETRatingsratingsidhistory',
    resource: 'ratings',
    method: 'GET',
    path: '/ratings/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};