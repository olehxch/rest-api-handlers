module.exports = function GetEventseventsidanalytics(req, res) {
  res.send({
    command: 'GETEventseventsidanalytics',
    resource: 'events',
    method: 'GET',
    path: '/events/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};