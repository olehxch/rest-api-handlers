module.exports = function DeleteEventsevents(req, res) {
  res.send({
    command: 'DELETEEventsevents',
    resource: 'events',
    method: 'DELETE',
    path: '/events',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};