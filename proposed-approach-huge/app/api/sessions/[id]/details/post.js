module.exports = function PostSessionssessionsiddetails(req, res) {
  res.send({
    command: 'POSTSessionssessionsiddetails',
    resource: 'sessions',
    method: 'POST',
    path: '/sessions/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};