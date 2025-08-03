module.exports = function GetSessionssessionsid(req, res) {
  res.send({
    command: 'GETSessionssessionsid',
    resource: 'sessions',
    method: 'GET',
    path: '/sessions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};