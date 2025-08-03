module.exports = function PostEventsevents(req, res) {
  res.send({
    command: 'POSTEventsevents',
    resource: 'events',
    method: 'POST',
    path: '/events',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};