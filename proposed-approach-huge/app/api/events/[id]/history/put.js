module.exports = function PutEventseventsidhistory(req, res) {
  res.send({
    command: 'PUTEventseventsidhistory',
    resource: 'events',
    method: 'PUT',
    path: '/events/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};