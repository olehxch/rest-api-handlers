module.exports = function GetEventseventsidreports(req, res) {
  res.send({
    command: 'GETEventseventsidreports',
    resource: 'events',
    method: 'GET',
    path: '/events/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};