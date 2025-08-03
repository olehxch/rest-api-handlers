module.exports = function GetRatingsratings(req, res) {
  res.send({
    command: 'GETRatingsratings',
    resource: 'ratings',
    method: 'GET',
    path: '/ratings',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};