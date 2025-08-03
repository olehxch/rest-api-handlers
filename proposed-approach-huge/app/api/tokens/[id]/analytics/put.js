module.exports = function PutTokenstokensidanalytics(req, res) {
  res.send({
    command: 'PUTTokenstokensidanalytics',
    resource: 'tokens',
    method: 'PUT',
    path: '/tokens/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};