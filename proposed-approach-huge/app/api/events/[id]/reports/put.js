module.exports = function PutEventseventsidreports(req, res) {
  res.send({
    command: 'PUTEventseventsidreports',
    resource: 'events',
    method: 'PUT',
    path: '/events/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};