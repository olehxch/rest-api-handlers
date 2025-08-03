module.exports = function PutSessionssessionsiddetails(req, res) {
  res.send({
    command: 'PUTSessionssessionsiddetails',
    resource: 'sessions',
    method: 'PUT',
    path: '/sessions/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};