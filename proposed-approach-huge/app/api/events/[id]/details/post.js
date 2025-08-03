module.exports = function PostEventseventsiddetails(req, res) {
  res.send({
    command: 'POSTEventseventsiddetails',
    resource: 'events',
    method: 'POST',
    path: '/events/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};