module.exports = function GetRatingsratingsid(req, res) {
  res.send({
    command: 'GETRatingsratingsid',
    resource: 'ratings',
    method: 'GET',
    path: '/ratings/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};