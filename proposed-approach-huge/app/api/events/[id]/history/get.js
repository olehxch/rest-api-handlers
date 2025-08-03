module.exports = function GetEventseventsidhistory(req, res) {
  res.send({
    command: 'GETEventseventsidhistory',
    resource: 'events',
    method: 'GET',
    path: '/events/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};