module.exports = function PostEventseventsidanalytics(req, res) {
  res.send({
    command: 'POSTEventseventsidanalytics',
    resource: 'events',
    method: 'POST',
    path: '/events/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};