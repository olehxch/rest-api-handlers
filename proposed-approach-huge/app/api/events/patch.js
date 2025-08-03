module.exports = function PatchEventsevents(req, res) {
  res.send({
    command: 'PATCHEventsevents',
    resource: 'events',
    method: 'PATCH',
    path: '/events',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};