module.exports = function GetSessionssessions(req, res) {
  res.send({
    command: 'GETSessionssessions',
    resource: 'sessions',
    method: 'GET',
    path: '/sessions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};