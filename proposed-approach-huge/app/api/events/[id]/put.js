module.exports = function PutEventseventsid(req, res) {
  res.send({
    command: 'PUTEventseventsid',
    resource: 'events',
    method: 'PUT',
    path: '/events/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};