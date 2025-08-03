module.exports = function PutEventseventsidanalytics(req, res) {
  res.send({
    command: 'PUTEventseventsidanalytics',
    resource: 'events',
    method: 'PUT',
    path: '/events/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};