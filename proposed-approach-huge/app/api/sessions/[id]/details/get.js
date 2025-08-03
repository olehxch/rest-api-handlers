module.exports = function GetSessionssessionsiddetails(req, res) {
  res.send({
    command: 'GETSessionssessionsiddetails',
    resource: 'sessions',
    method: 'GET',
    path: '/sessions/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};