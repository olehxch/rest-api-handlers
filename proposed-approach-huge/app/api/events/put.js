module.exports = function PutEventsevents(req, res) {
  res.send({
    command: 'PUTEventsevents',
    resource: 'events',
    method: 'PUT',
    path: '/events',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};