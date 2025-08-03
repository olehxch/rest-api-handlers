module.exports = function PutTokenstokensidreports(req, res) {
  res.send({
    command: 'PUTTokenstokensidreports',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};