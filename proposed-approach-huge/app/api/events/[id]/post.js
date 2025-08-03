module.exports = function PostEventseventsid(req, res) {
  res.send({
    command: 'POSTEventseventsid',
    resource: 'events',
    method: 'POST',
    path: '/events/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};