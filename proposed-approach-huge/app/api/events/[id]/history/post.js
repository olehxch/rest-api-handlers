module.exports = function PostEventseventsidhistory(req, res) {
  res.send({
    command: 'POSTEventseventsidhistory',
    resource: 'events',
    method: 'POST',
    path: '/events/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};