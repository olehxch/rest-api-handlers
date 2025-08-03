module.exports = function PostEventseventsidreports(req, res) {
  res.send({
    command: 'POSTEventseventsidreports',
    resource: 'events',
    method: 'POST',
    path: '/events/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};